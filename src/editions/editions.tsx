import { useQuery } from "@tanstack/react-query";
import { graphql } from "../gql";
import { EdycjeQuery } from "../gql/graphql";
import { graphQLClient } from "../graphql-client/client.ts";

type Edition = {
	title: string;
	edycjaOd: string;
	edycjaDo: string;
	wolneMiejsca: string;
};

const allEditions = graphql(/* GraphQL */ `
	query Edycje {
		editionsCollection {
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

export const Editions = () => {
	const { data } = useQuery<EdycjeQuery>({
		queryKey: ["films"],
		queryFn: async () => graphQLClient.request(allEditions),
	});
	const { editionsCollection } = data || { editionsCollection: { items: [] } };
	const editions = editionsCollection?.items as Edition[];
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
