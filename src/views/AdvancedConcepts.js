import {ScreenBox, CodeBlock} from '../assets/css/Styling';
import UserCommentList from '../components/AdvancedConcepts/UserCommentList';
import PuttingAllTogether from '../components/AdvancedConcepts/PuttingAllTogether';

export const AdvancedConcepts = () => {
    return <>
        <h2>Advanced Styling</h2>
        <p>In this example we use the Faker library. See more in <a href="https://github.com/Marak/faker.js" target="_blank" title="click here and go to the page">Faker.js</a></p>
        <p>We need to install the dependency "styled-components" to use this type of styling.</p>
        <p>Code:</p>
        <div className="Code">
            <p>
                npm install styled-components --save
            </p>
        </div>
        <p>Analyze the class below:</p>
        <div className="Result">
            <UserCommentList></UserCommentList>
        </div>
        <p className="Note"><b>Note: </b>Inside this code above we have a perfect example of Reusability.</p>




        <h2>Axios vs Fetch</h2>
        <p>"Axios" is a stand alone 3rd party package. Uses a more professional approach. To install axios we need to do:</p>
        <CodeBlock>
            <p>npm install --save axios</p>
        </CodeBlock>
        <p>"Fetch" is a function built into modern browsers, so we dont need to install it. Its a low level function to handler with basic data.</p>




        <h2>Consuming an external API</h2>
        <p>Here, we will consume an external API, start to making a better use of the containers and other good pratices.</p>
        <ScreenBox>
            <PuttingAllTogether/>
        </ScreenBox>

    </>
}
