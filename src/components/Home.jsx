import "../styles/Home.css";

const Home = () =>{
   return(
      <div id="home">
         <h1>Explore the Possibilities of AI Book Writing with BookAI</h1>
         <div id="intro">
            <p>Unleash the power of AI to create captivating books in minutes. Download, Distribute wherever you want. Generate unlimited free books</p>
         </div>
         <div>
         <button className="my-btn" >Get Started</button>
         <button className="my-btn">Get API Access</button>
         </div>
         <div id="attention">
         <p>Attention:TryBookAI has been acquired by Indicus AI. Indicus LLM will be used for text and image generation</p>
         </div>
      </div>
   )
}
export default Home;