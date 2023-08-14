
type Edition = {
	id: string;
	title: string;
	dates: string;
	vacant: string;
};

const editions = [
	{
		id: "101 edycja",
		title: "101 edycja",
		dates: "21 sierpnia - 1 września 2023",
		vacant: "Liczba wolnych miejsc: brak",
	},
	{
		id: "102 edycja",
		title: "102 edycja",
		dates: "4 - 15 września 2023",
		vacant: "Liczba wolnych miejsc: brak",
	},
	{
		id: "103 edycja",
		title: "103 edycja",
		dates: "18 - 29 września 2023",
		vacant: "Liczba wolnych miejsc: 3",
	},
];

const EditionCard = ({ edition }: { edition: Edition }) => {
	return (
		<div className="icon-box">
			<div className="icon">
				<i className="bx bx-calendar"></i>
			</div>
			<h4 className="title">
				<a id="title">{edition.title}</a>
			</h4>
			<p className="description" id="dates">
				{edition.dates}
			</p>
			<p className="description" id="vacant">
				{edition.vacant}
			</p>
		</div>
	);
};

export const Editions = () => {
	return editions.map((edition) => (
		<div
			key={edition.id}
			className="col-md-6 col-lg-6 align-items-stretch mb-5 mb-lg-0 edycja"
			id={edition.id}
		>
			<EditionCard edition={edition} />
		</div>
	));
};
