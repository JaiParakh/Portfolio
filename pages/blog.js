import Layout from './../components/Layout';
import BlogList from './../components/BlogList';

const blogs = [{
	title: "Integrating Google APIs with Node.js Applications",
	body: "In this article, we will see how to integrate Google APIs with Node.js Applications",
	date: "March 19, 2020",
	img: "blog-5.jfif",
	link: "https://medium.com/@parakh.js/integrating-google-apis-with-node-js-applications-652df4a232e5"
},
{
	title: "How to Communicate between Node.js and Python",
	body: "In this article, we will see how to send data from node.js to python script and get the result back.",
	date: "March 4, 2020",
	img: "blog-4.jfif",
	link: "https://medium.com/@parakh.js/how-to-communicate-between-node-js-and-python-1099a8df8220"
},
{
	title: "How To Use GMAIL API with Node.js Part-1",
	body: "In this, we will connect our application with the user’s gmail account.",
	date: "Jun 24, 2019",
	img: "blog-1.jfif",
	link: "https://medium.com/@parakh.js/how-to-use-gmail-api-with-node-js-part-1-b17097a64990"
},
{
	title: "How To Use GMAIL API with Node.js Part-2",
	body: "In this, we will create and send mails, save , delete and list all drafts in the user’s account.",
	date: "Jun 24, 2019",
	img: "blog-2.jfif",
	link: "https://medium.com/@parakh.js/how-to-use-gmail-api-with-node-js-part-2-72f3e9b6b060"
},
{
	title: "How To Use GMAIL API with Node.js Part-3",
	body: "In this, we list all mails in user’s inbox and parse them to filter Medium Blog links.",
	date: "Jun 24, 2019",
	img: "blog-3.jfif",
	link: "https://medium.com/@parakh.js/how-to-use-gmail-api-with-node-js-part-3-6d5854013f2f"
}]

export default function Blog() {
    return (
		<Layout>
			{
				blogs.map((b) => {
					return <BlogList title={b.title} body={b.body} date={b.date} img={b.img} link={b.link}/>
				})
			}
		</Layout>
    );
  }