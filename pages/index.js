import Layout from './../components/Layout';
import MyTerminal from './../components/MyTerminal';

export default function Index() {
    return (
		<Layout>
			<div className="demo">
				<MyTerminal />
			</div>
			<style jsx>{`
				/*.demo{
					padding-top:2.5em;
				}*/
			`}</style>
		</Layout>
    );
  }