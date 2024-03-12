import ASSET_MANAGEMENT_SYSTEM from "../public/images/Screenshots/a-m-s.png";
import JOBIFY from "../public/images/Screenshots/jobify.png";
import JOBIFY_API from "../public/images/Screenshots/jobs-api.png";
import COMBONI_HEALTH from "../public/images/Screenshots/comboni-health.png";
import LOOP_STUDIO from "../public/images/Screenshots/loop-studio.png";

const myWork = [
  {
    id: 0,
    name: "ASSET MANAGEMENT SYSTEM",
    image: ASSET_MANAGEMENT_SYSTEM,
    link: "https://asset-management-system2.onrender.com",
    text: (
      <p>
        Managing assets has never been easier, with this web application based
        on a problem I was solving a while back. It can create,store delete and
        update assets. Some of the languages used include;{" "}
        <b>mongo,react,nodejs and express.</b>
      </p>
    ),
  },
  {
    id: 1,
    name: "JOBIFY API",
    image: JOBIFY_API,
    link: "https://jobs-api-kenya.onrender.com",
    text: (
      <p>
        This is a jobs application programming interface (API) documentation,
        that has been created using <b>nodejs and express.</b>
      </p>
    ),
  },
  {
    id: 2,
    name: "JOBIFY APP",
    image: JOBIFY,
    link: "https://myjobstrackerkenya.onrender.com",
    text: (
      <p>
        Imagine a website where you could track the jobs that you have applied
        for, your references and those you may be competing with for that job,
        your competence scores, which type of jobs you are qualified for and,
        ultimately, your rate of employment success.
        <b>This is what you have been looking for.</b>
      </p>
    ),
  },
  {
    id: 3,
    name: "COMBONI HEALTH",
    image: COMBONI_HEALTH,
    link: "https://www.combonihealth.or.ke/",
    text: (
      <p>
        Comboni Health is a non-profit organization that provides health care
        services to the poor and marginalized in Kenya.
      </p>
    ),
  },
  {
    id: 4,
    name: "LOOP STUDIO",
    image: LOOP_STUDIO,
    link: "https://richiemugambi4.editorx.io/loopstudio",
    text: (
      <p>
        Loop Studio is a full-service creative agency that is dedicated to
        building brands. We are a team of diverse individuals who come together
        to create the perfect recipe for your brand.
      </p>
    ),
  },
];

export default myWork;
