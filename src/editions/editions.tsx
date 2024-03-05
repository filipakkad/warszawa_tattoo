import { useQuery } from "@tanstack/react-query";
import { graphql } from "../gql";
import { KursDwutygodniowyQuery, KursTygodniowyQuery, KursWeekendowyQuery } from "../gql/graphql";
import { graphQLClient } from "../graphql-client/client.ts";

type Edition = {
	title: string;
	edycjaOd: string;
	edycjaDo: string;
	wolneMiejsca: string;
};

const twoWeeksCourse = graphql(/* GraphQL */ `
	query KursDwutygodniowy {
		editionsTwoWeeksCollection {
			items {
				title
				edycjaOd
				edycjaDo
				wolneMiejsca
			}
		}
	}
`);

const weeklyCourse = graphql(/* GraphQL */ `
	query KursTygodniowy {
		editionsWeekCollection {
			items {
				title
				edycjaOd
				edycjaDo
				wolneMiejsca
			}
		}
	}
`);

const weekendCourse = graphql(/* GraphQL */ `
	query KursWeekendowy {
		editionsWeekendCollection {
			items {
				title
				edycjaOd
				edycjaDo
				wolneMiejsca
			}
		}
	}
`);

const printRange = (startDate: Date, endDate: Date) => {
	if(startDate.getFullYear() === endDate.getFullYear()) {
		if(startDate.getMonth() === endDate.getMonth()) {
			return `${startDate.getDate()} - ${endDate.toLocaleString('pl-PL', { day: 'numeric', month: 'long'})} ${startDate.getFullYear()}`
		} else {
			return `${startDate.toLocaleString('pl-PL', { day: "numeric", month: 'long'})} - ${endDate.toLocaleString('pl-PL', { day: "numeric", month: 'long'})} ${startDate.getFullYear()}`
		}
	} else {
		return `${startDate.toLocaleString('pl-PL', { day: 'numeric', month: 'long'})} ${startDate.getFullYear()} - ${endDate.toLocaleString('pl-PL', { day: 'numeric', month: 'long'})} ${endDate.getFullYear()}`
	}
}

const EditionCard = ({ edition }: { edition: Edition }) => {
	const startDate = new Date(edition?.edycjaOd || "");
	const endDate = new Date(edition?.edycjaDo || "");

	return (
		<div className="icon-box">
			<div className="icon">
				<i className="bx bx-calendar"></i>
			</div>
			<h4 className="title">
				<a id="title">{edition.title}</a>
			</h4>
			<p className="description" id="dates">
				{printRange(startDate, endDate)}
			</p>
			<p className="description" id="vacant">
				{`Liczba wolnych miejsc: ${edition.wolneMiejsca}`}
			</p>
		</div>
	);
};

export enum CourseType {
	WEEK,
	WEEKEND	= 1,
	TWOWEEKS	= 2,
}

export const WeekCourseEditions	= () => {
	const { data } = useQuery<KursTygodniowyQuery>({
		queryKey: ["courseType", CourseType.WEEK],
		queryFn: async () => graphQLClient.request(weeklyCourse),
	});
	const { editionsWeekCollection } = data || { editionsCollection: { items: [] } };
	const editions = editionsWeekCollection?.items as Edition[];
	return editions?.sort((a, b) => a.edycjaDo > b.edycjaDo ? 1 : -1).map((edition) =>
		edition ? (
			<div
				key={edition.title}
				className="col-md-6 col-lg-6 align-items-stretch mb-5 mb-lg-0 edycja"
			>
				<EditionCard edition={edition} />
			</div>
		) : null
	);
}

export const WeekendCourseEditions	= () => {
	const { data } = useQuery<KursWeekendowyQuery>({
		queryKey: ["courseType", CourseType.WEEKEND],
		queryFn: async () => graphQLClient.request(weekendCourse),
	});
	const { editionsWeekendCollection } = data || { editionsCollection: { items: [] } };
	const editions = editionsWeekendCollection?.items as Edition[];
	return editions?.sort((a, b) => a.edycjaDo > b.edycjaDo ? 1 : -1).map((edition) =>
		edition ? (
			<div
				key={edition.title}
				className="col-md-6 col-lg-6 align-items-stretch mb-5 mb-lg-0 edycja"
			>
				<EditionCard edition={edition} />
			</div>
		) : null
	);
}

export const TwoWeeksEditions = () => {
	const { data } = useQuery<KursDwutygodniowyQuery>({
		queryKey: ["courseType", CourseType.TWOWEEKS],
		queryFn: async () => graphQLClient.request(twoWeeksCourse),
	});
	const { editionsTwoWeeksCollection } = data || { editionsCollection: { items: [] } };
	const editions = editionsTwoWeeksCollection?.items as Edition[];
	return editions?.sort((a, b) => a.edycjaDo > b.edycjaDo ? 1 : -1).map((edition) =>
		edition ? (
			<div
				key={edition.title}
				className="col-md-6 col-lg-6 align-items-stretch mb-5 mb-lg-0 edycja"
			>
				<EditionCard edition={edition} />
			</div>
		) : null
	);
};
