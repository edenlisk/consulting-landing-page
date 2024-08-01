import cheerio from 'cheerio';
import HTMLReactParser from 'html-react-parser/lib/index';

const transformElement = (element) => {
    switch (element.tagName) {
        case 'h1':
            element.tagName = 'p';
            element.attribs.class = (element.attribs.class || '') + ' text-4xl font-bold';
            break;
        case 'h2':
            element.tagName = 'p';
            element.attribs.class = (element.attribs.class || '') + ' text-3xl font-semibold';
            break;
        case 'h3':
            element.tagName = 'p';
            element.attribs.class = (element.attribs.class || '') + ' text-2xl font-medium';
            break;
        case 'h4':
            element.tagName = 'p';
            element.attribs.class = (element.attribs.class || '') + ' text-xl font-medium';
            break;
        case 'a':
            element.attribs.class = (element.attribs.class || '') + ' text-blue-500 hover:text-blue-700 underline';
            break;
        case 'ul':
            element.attribs.class = (element.attribs.class || '') + ' list-disc pl-5';
            break;
        case 'ol':
            element.attribs.class = (element.attribs.class || '') + ' list-decimal pl-5';
            break;
        case 'img':
            element.attribs.class = (element.attribs.class || '') + ' max-w-full h-auto';
            break;
        case 'table':
            element.attribs.class = (element.attribs.class || '') + ' w-full border-collapse';
            break;
        case 'th':
            element.attribs.class = (element.attribs.class || '') + ' border p-2 bg-gray-100';
            break;
        case 'td':
            element.attribs.class = (element.attribs.class || '') + ' border p-2';
            break;
        default:
            break;
    }

    // Recursively transform children
    const children = element.children || [];
    children.forEach(transformElement);
};

const transformHtmlToTailwind = (htmlString) => {
    const $ = cheerio.load(htmlString);
    const bodyChildren = $('body').children();

    bodyChildren.each((_, element) => {
        transformElement(element);
    });

    return $('body').html();
};

// Example usage
const inputHtml = `<div><header>
        <h1><span style="font-family: Impact, Charcoal, sans-serif;">​</span>Exploring Space Koko</h1>
    </header>

    <section>
        <h2><span style="text-decoration: line-through;">Introduction</span> to Space Exploration</h2>
        <p>Space exploration is the investigation of outer space using spacecraft and satellites. It includes both manned and unmanned missions.</p>
    </section>

    <section>
        <h2>Notable Space Missions</h2>
        <h3>Apollo Missions</h3>
        <p>The Apollo program, conducted by NASA, achieved the first manned moon landing in 1969 with Apollo 11.</p>
        
        <h3>Voyager Missions</h3>
        <p>The Voyager probes were launched in the late 1970s and have provided valuable data about outer planets and interstellar space.</p>
    </section>

    <section>
        <h2>Images from Space</h2>
        <img src="https://example.com/space-image1.jpg" alt="Space Image 1" class="e-rte-image e-imginline">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrftUWl-7SmpcxZ8JuRhkXFjMmPLo9vqJWXg&amp;s" alt="Space Image 2" class="e-rte-image e-imginline">
    </section>

    <section>
        <h2>Interesting Facts about Space</h2>
        <ul>
            <li>Space is completely silent because there is no atmosphere to carry sound waves.</li>
            <li>The largest volcano in the solar system is on Mars - Olympus Mons.</li>
            <li>The International Space Station travels at a speed of approximately 28,000 kilometers per hour (17,500 miles per hour).</li>
        </ul>
    </section>

    <footer>
        <p>Explore more about space at <a href="https://www.nasa.gov">NASA's website</a>.</p><p><br></p><p><br></p></footer></div><table class="e-rte-table" style="width: 100%; min-width: 0px;"><tbody><tr><td class="" style="width: 25%; background-color: rgb(255, 255, 0);">Age</td><td style="width: 25%; background-color: rgb(255, 255, 0);" class="">id</td><td style="width: 25%; background-color: rgb(255, 255, 0);" class=""><br></td><td style="width: 25%; background-color: rgb(255, 255, 0);" class=""><br></td></tr><tr><td style="width: 25%;" class="">Eden</td><td style="width: 25%;" class="">20241022</td><td style="width: 25%;" class=""><br></td><td style="width: 25%;" class=""><br></td></tr></tbody></table><p><br></p>`;

const transformedHtml = transformHtmlToTailwind(inputHtml);
console.log(transformedHtml);


const HtmlText = () => {
  return (
    <div className='px-12'>
        {HTMLReactParser(transformedHtml)}
    </div>
  )
}

export default HtmlText