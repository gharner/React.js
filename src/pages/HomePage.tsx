import { Card } from 'primereact/card';
import react from '../assets/react.png';
import python from '../assets/python.png';
import node from '../assets/node.png';

const HomePage = () => {
	return (
		<>
			<div className='grid'>
				<div className='col-4'>
					<div className='text-center p-3 border-round-sm h-full bg-primary font-bold'>
						<img
							src={react}
							alt='Angular'
						/>
						<img
							src={python}
							alt='Python'
						/>
						<img
							src={node}
							alt='Node.js'
						/>
					</div>
				</div>
				<div className='col-8'>
					<div className='grid'>
						<div className='col-12'>
							<Card
								title='About My Sandbox'
								subTitle='A Safe Place to Play'>
								My sandbox serves as a safe experimentation zone, allowing me to explore new concepts without jeopardizing the integrity of my
								development and production environments. Both my development and production environments are identical in configuration, differing only
								in the backend projects to which they connect. This uniformity ensures consistent behavior across deployments, eliminating the concern
								of discrepancies during application rollouts. However, this setup comes with a drawback: any attempt to upgrade or introduce new
								packages risks crippling the environment, rendering it inoperative until resolved. To mitigate this risk, I maintain a separate sandbox
								environment exclusively for testing experimental code or acquiring new skills. This space isn't designed to showcase a cohesive theme
								but rather to serve as a repository of varied components, each reflecting a different learning pursuit. As you navigate my sandbox,
								bear in mind its primary purpose: a playground for innovation and learning, not a production-grade showcase.
							</Card>
						</div>
						<div className='col-12'>
							<Card
								title='The Sand in My Sandbox'
								subTitle='What I am Playing With'>
								<h3 id='examples'>Examples</h3>
								<p>
									Under the "Examples" section of my sandbox, you'll discover a curated collection of projects and snippets where I delve into
									various frontend development concepts, particularly focusing on React.js. This dynamic library is a cornerstone of my frontend
									development, allowing me to create responsive user interfaces that enhance the user experience. You'll find demonstrations of
									state management, component architecture, and integration with various APIs, showcasing how React.js can be harnessed to build
									scalable and maintainable web applications.
								</p>
								<h3>Python</h3>
								<p>
									In the realm of server-side scripting, Python is my go-to language, not merely for its simplicity and readability but also for its
									robust capabilities in web development. Although Python is versatile enough to serve HTML content directly, I prefer leveraging
									its power primarily as an API gateway. This involves utilizing Python for backend authentication processes, managing database
									interactions with precision, and establishing secure connections with third-party CORS-compliant websites. My use of Python
									ensures that the server-side of my applications is not only efficient and secure but also seamlessly integrated with the frontend
									components.
								</p>
								<h3>Node.js</h3>
								<p>
									Node.js, particularly through Firebase Functions in my implementations, forms the backbone of my backend operations. This
									environment allows me to build and deploy microservices efficiently, handling various backend tasks such as data processing, user
									authentication, and server-side logic. The use of Firebase Functions further enhances this architecture by providing a serverless
									framework, ensuring scalability and reducing the overhead of server management. With Node.js, I can ensure that my applications
									are not only responsive and fast on the client side but also robust and reliable on the server side.
								</p>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;
