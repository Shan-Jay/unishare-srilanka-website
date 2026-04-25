import React, { useState, useEffect } from 'react';
import { Code, Book, Brain, Sparkles, Coffee, Scissors, Monitor, X } from 'lucide-react';
import './Courses.css';

const ictDescription = (
  <div className="course-details">
    <h3>Diploma in ICT & Digital Media (AI-Integrated)</h3>
    <p>This comprehensive diploma is designed to bridge the gap between traditional computing and the modern AI-driven landscape. Students will gain a robust foundation in technical essentials while mastering the creative and strategic tools required for today's digital economy.</p>
    
    <h4>Course Overview</h4>
    <ul>
      <li><strong>Duration:</strong> 6 Months (Intensive)</li>
      <li><strong>Total Credits:</strong> 30 Credits</li>
      <li><strong>Target Audience:</strong> Students and professionals looking to specialize in ICT, Multimedia, and AI-assisted development.</li>
    </ul>

    <h4>Module Breakdown</h4>
    <div className="table-responsive">
      <table className="module-table">
        <thead>
          <tr>
            <th>Module</th>
            <th>Title</th>
            <th>Credits</th>
            <th>Key Topics</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>01</td><td>Computing Fundamentals & Logic</td><td>4</td><td>Number systems, logic gates, computer history, and hardware architecture.</td></tr>
          <tr><td>02</td><td>Advanced Office Productivity</td><td>4</td><td>Mastery of Microsoft Office Suite (Word, Excel, PowerPoint) for professional use.</td></tr>
          <tr><td>03</td><td>Multimedia Production</td><td>6</td><td>Graphic design with Adobe Photoshop and professional video editing with Premiere Pro.</td></tr>
          <tr><td>04</td><td>Web & AI Programming</td><td>6</td><td>Modern web development and software development utilizing AI-driven tools.</td></tr>
          <tr><td>05</td><td>Digital Marketing & AI Strategy</td><td>5</td><td>Fundamentals of digital marketing, SEO, and leveraging AI for business growth.</td></tr>
          <tr><td>06</td><td>Capstone Project & Career Prep</td><td>5</td><td>A final hands-on project and workshops on career development and portfolio building.</td></tr>
        </tbody>
      </table>
    </div>

    <h4>Why Enroll in This Program?</h4>
    <p>This course stands out by integrating Artificial Intelligence into every core domain. Whether you are coding a website or designing a marketing campaign, you will learn how to use AI to increase efficiency and innovation. By the end of the program, you will have a professional portfolio that demonstrates your ability to navigate both the creative and technical sides of the digital world.</p>

    <h4>Admission Requirements</h4>
    <ul>
      <li>Successful completion of secondary education.</li>
      <li>Basic familiarity with computer operations.</li>
      <li>A passion for technology and creativity.</li>
    </ul>
  </div>
);

const englishDescription = (
  <div className="course-details">
    <h3>Diploma in English (Professional & Academic Communication)</h3>
    <p>This program is designed to enhance language proficiency, focusing on practical communication skills, professional writing, and linguistic accuracy. It is ideal for students and professionals looking to improve their fluency for academic advancement or global career opportunities.</p>
    
    <h4>Course Overview</h4>
    <ul>
      <li><strong>Duration:</strong> 6 Months</li>
      <li><strong>Total Credits:</strong> 30 Credits</li>
      <li><strong>Delivery:</strong> Integrated Practical & Theoretical Sessions</li>
    </ul>

    <h4>Module Breakdown</h4>
    <div className="table-responsive">
      <table className="module-table">
        <thead>
          <tr>
            <th>Module</th>
            <th>Title</th>
            <th>Credits</th>
            <th>Key Topics</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>01</td><td>Foundations of English Grammar</td><td>5</td><td>Tenses, sentence structure, parts of speech, and common errors.</td></tr>
          <tr><td>02</td><td>Effective Speaking & Listening</td><td>5</td><td>Phonetics, pronunciation, conversational fluency, and active listening.</td></tr>
          <tr><td>03</td><td>Professional Writing Skills</td><td>5</td><td>Business letters, emails, report writing, and creative composition.</td></tr>
          <tr><td>04</td><td>Reading & Critical Analysis</td><td>5</td><td>Comprehension strategies, vocabulary building, and interpreting diverse texts.</td></tr>
          <tr><td>05</td><td>English for ICT & Business</td><td>5</td><td>Technical terminology, presentation skills, and workplace etiquette.</td></tr>
          <tr><td>06</td><td>Final Project / Oral Assessment</td><td>5</td><td>A comprehensive assessment focused on public speaking and a research essay.</td></tr>
        </tbody>
      </table>
    </div>

    <h4>Course Description</h4>
    <p>The Diploma in English goes beyond basic grammar to empower students with the confidence to communicate effectively in any environment. Through a blend of immersive speaking exercises, digital communication tools, and academic writing, students will master the nuances of the English language.</p>

    <h4>Learning Outcomes</h4>
    <ul>
      <li>Communicate fluently and accurately in diverse social and professional settings.</li>
      <li>Produce high-quality written content for business and academic purposes.</li>
      <li>Develop a professional vocabulary tailored to the modern digital workforce.</li>
      <li>Master public speaking and presentation techniques.</li>
    </ul>

    <h4>Target Audience</h4>
    <ul>
      <li>School leavers seeking higher education opportunities.</li>
      <li>Professionals looking to improve workplace communication.</li>
      <li>Individuals preparing for international proficiency exams.</li>
    </ul>
  </div>
);

const psychologyDescription = (
  <div className="course-details">
    <h3>Diploma in Psychology (Human Behavior & Mental Health)</h3>
    <p>This diploma provides an entry-level understanding of the human mind and behavior. It is structured to provide students with both theoretical knowledge and practical insights into psychological principles, making it a valuable asset for those in education, management, healthcare, or social services.</p>
    
    <h4>Course Overview</h4>
    <ul>
      <li><strong>Duration:</strong> 6 Months</li>
      <li><strong>Total Credits:</strong> 30 Credits</li>
      <li><strong>Structure:</strong> 6 Core Modules</li>
    </ul>

    <h4>Module Breakdown</h4>
    <div className="table-responsive">
      <table className="module-table">
        <thead>
          <tr>
            <th>Module</th>
            <th>Title</th>
            <th>Credits</th>
            <th>Key Topics</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>01</td><td>Introduction to Psychology</td><td>5</td><td>History of psychology, major schools of thought, and research methods.</td></tr>
          <tr><td>02</td><td>Developmental Psychology</td><td>5</td><td>Human growth stages from childhood through adulthood and aging.</td></tr>
          <tr><td>03</td><td>Cognitive Psychology</td><td>5</td><td>Study of mental processes: memory, perception, problem-solving, and AI parallels.</td></tr>
          <tr><td>04</td><td>Social Psychology</td><td>5</td><td>Group dynamics, social influence, prejudice, and interpersonal relationships.</td></tr>
          <tr><td>05</td><td>Abnormal Psychology</td><td>5</td><td>Understanding mental health disorders, symptoms, and modern therapeutic approaches.</td></tr>
          <tr><td>06</td><td>Counseling Fundamentals</td><td>5</td><td>Basic counseling skills, ethics, and psychological assessment techniques.</td></tr>
        </tbody>
      </table>
    </div>

    <h4>Course Description</h4>
    <p>The Diploma in Psychology explores the "why" behind human actions. Students will dive into the biological and environmental factors that shape personality and behavior. The program emphasizes the application of psychological theory to real-world scenarios, such as workplace productivity, education, and personal mental well-being.</p>

    <h4>Key Benefits</h4>
    <ul>
      <li><strong>Understand Behavior:</strong> Gain insights into why people think and act the way they do.</li>
      <li><strong>Communication Skills:</strong> Improve emotional intelligence and conflict resolution abilities.</li>
      <li><strong>Career Versatility:</strong> Enhance your profile for roles in HR, teaching, marketing, or community support.</li>
      <li><strong>Foundation for Higher Study:</strong> Serves as an excellent stepping stone for a Bachelor's degree in Psychology or Social Work.</li>
    </ul>

    <h4>Target Audience</h4>
    <ul>
      <li>Individuals interested in mental health and counseling.</li>
      <li>Teachers and educators looking to better understand student behavior.</li>
      <li>HR professionals and managers aiming to improve organizational culture.</li>
    </ul>
  </div>
);

const beautyDescription = (
  <div className="course-details">
    <h3>Diploma in Beauty Culture & Professional Cosmetology</h3>
    <p>This comprehensive diploma is designed for aspiring beauty professionals who want to master the art and science of skin care, hair styling, and makeup artistry. The program combines theoretical knowledge with intensive practical training to prepare students for a successful career in the global beauty and wellness industry.</p>
    
    <h4>Course Overview</h4>
    <ul>
      <li><strong>Duration:</strong> 6 Months</li>
      <li><strong>Total Credits:</strong> 30 Credits</li>
      <li><strong>Structure:</strong> Theory & Hands-on Practical Sessions</li>
    </ul>

    <h4>Module Breakdown</h4>
    <div className="table-responsive">
      <table className="module-table">
        <thead>
          <tr>
            <th>Module</th>
            <th>Title</th>
            <th>Credits</th>
            <th>Key Topics</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>01</td><td>Professional Ethics & Hygiene</td><td>4</td><td>Salon management, client consultation, sterilization, and safety standards.</td></tr>
          <tr><td>02</td><td>Skin Care & Facial Treatments</td><td>6</td><td>Skin anatomy, skin types, facials, clean-ups, and specialized treatments.</td></tr>
          <tr><td>03</td><td>Hair Artistry & Styling</td><td>6</td><td>Hair cutting, coloring, perming, straightening, and scalp treatments.</td></tr>
          <tr><td>04</td><td>Professional Makeup Artistry</td><td>6</td><td>Bridal makeup, party looks, contouring, and advanced color theory.</td></tr>
          <tr><td>05</td><td>Manicure, Pedicure & Nail Art</td><td>4</td><td>Hand and foot care, nail anatomy, gel polish, and creative nail design.</td></tr>
          <tr><td>06</td><td>Salon Business & Marketing</td><td>4</td><td>Starting a beauty business, social media branding, and retail skills.</td></tr>
        </tbody>
      </table>
    </div>

    <h4>Course Description</h4>
    <p>The Diploma in Beauty Culture is a gateway to the vibrant world of aesthetics. Students will learn the latest techniques in hair and skin care, utilizing modern tools and high-quality products. The curriculum is structured to build confidence, from mastering basic threading and waxing to executing complex bridal transformations.</p>

    <h4>Key Learning Outcomes</h4>
    <ul>
      <li><strong>Expertise in Skin & Hair:</strong> Diagnose skin conditions and hair types to provide personalized treatments.</li>
      <li><strong>Artistic Makeup Skills:</strong> Develop the ability to create diverse looks ranging from natural day-wear to high-glamour bridal styles.</li>
      <li><strong>Technical Proficiency:</strong> Gain hands-on experience with professional beauty equipment and chemical treatments.</li>
      <li><strong>Entrepreneurial Mindset:</strong> Learn how to manage a salon efficiently and build a loyal client base.</li>
    </ul>

    <h4>Target Audience</h4>
    <ul>
      <li>Individuals passionate about beauty, fashion, and personal grooming.</li>
      <li>Entrepreneurs looking to open their own beauty salon or spa.</li>
      <li>Freelance makeup artists and hair stylists seeking professional certification.</li>
    </ul>
  </div>
);

const cookeryDescription = (
  <div className="course-details">
    <h3>Diploma in Professional Cookery & Culinary Arts</h3>
    <p>This diploma is a comprehensive, hands-on program designed for aspiring chefs and culinary enthusiasts. It covers the fundamental techniques of classical and modern professional cooking, kitchen management, and food safety, providing students with the skills needed to excel in a professional commercial kitchen.</p>
    
    <h4>Course Overview</h4>
    <ul>
      <li><strong>Duration:</strong> 6 Months (Intensive)</li>
      <li><strong>Total Credits:</strong> 30 Credits</li>
      <li><strong>Structure:</strong> Practical Lab Sessions & Theoretical Foundation</li>
    </ul>

    <h4>Module Breakdown</h4>
    <div className="table-responsive">
      <table className="module-table">
        <thead>
          <tr>
            <th>Module</th>
            <th>Title</th>
            <th>Credits</th>
            <th>Key Topics</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>01</td><td>Food Safety & Kitchen Hygiene</td><td>4</td><td>HACCP standards, personal hygiene, food storage, and workstation sanitation.</td></tr>
          <tr><td>02</td><td>Culinary Fundamentals & Knife Skills</td><td>6</td><td>Classic vegetable cuts, stock making, mother sauces, and equipment handling.</td></tr>
          <tr><td>03</td><td>International Cuisine (Western & Asian)</td><td>6</td><td>Preparation of pasta, poultry, seafood, and regional specialties like Koththu and Fried Rice.</td></tr>
          <tr><td>04</td><td>Professional Baking & Pastry</td><td>5</td><td>Yeast products, cakes, desserts, and basic dough techniques.</td></tr>
          <tr><td>05</td><td>Food Costing & Menu Planning</td><td>4</td><td>Ingredient calculation for large groups (up to 50+), waste management, and menu design.</td></tr>
          <tr><td>06</td><td>Industrial Training / Final Practical</td><td>5</td><td>A final practical exam involving a full course meal preparation and service.</td></tr>
        </tbody>
      </table>
    </div>

    <h4>Course Description</h4>
    <p>The Diploma in Professional Cookery transforms a passion for food into a professional career. Starting with the "science" of the kitchen—safety and knife skills—the course moves rapidly into high-heat, real-world cooking scenarios. Students learn to master flavor profiles across various cultures while understanding the logistics of catering and large-scale food production.</p>

    <h4>Key Learning Outcomes</h4>
    <ul>
      <li><strong>Technical Mastery:</strong> Execute professional-grade knife cuts and cooking methods (braising, sautéing, roasting, etc.).</li>
      <li><strong>Global Palate:</strong> Develop expertise in both traditional local dishes and popular international cuisines.</li>
      <li><strong>Catering Logistics:</strong> Learn to calculate portions and costs for large events without compromising quality.</li>
      <li><strong>Professionalism:</strong> Work effectively in a high-pressure team environment following international kitchen standards.</li>
    </ul>

    <h4>Target Audience</h4>
    <ul>
      <li>Individuals aiming to work as Commis or Demi-Chefs in hotels and restaurants.</li>
      <li>Entrepreneurs planning to start a catering business or café.</li>
      <li>Home cooks looking to professionalize their culinary techniques.</li>
    </ul>
  </div>
);

const dressMakingDescription = (
  <div className="course-details">
    <h3>Diploma in Dress Making & Designing</h3>
    <p>This diploma is a creative and practical program designed for individuals who want to master the art of fashion design, pattern making, and garment construction. From basic stitching to advanced fashion illustration, students will gain the expertise needed to launch their own fashion brand or work in the global apparel industry.</p>
    
    <h4>Course Overview</h4>
    <ul>
      <li><strong>Duration:</strong> 6 Months</li>
      <li><strong>Total Credits:</strong> 30 Credits</li>
      <li><strong>Structure:</strong> 20% Theory, 80% Practical Workshop</li>
    </ul>

    <h4>Course Description</h4>
    <p>The Diploma in Dress Making & Designing turns creative concepts into wearable art. The curriculum begins with the fundamentals of textile selection and machine handling before moving into the technical world of pattern drafting. Students don't just learn to sew; they learn to design with a focus on silhouette, fit, and trend-forecasting. By the end of the course, each student will have created a mini-collection showcasing their unique style.</p>

    <h4>Key Learning Outcomes</h4>
    <ul>
      <li><strong>Precision Pattern Drafting:</strong> Create accurate paper patterns for various body shapes and styles.</li>
      <li><strong>Master Stitching:</strong> Execute professional-grade garment construction with high-end finishing.</li>
      <li><strong>Creative Design:</strong> Develop the ability to sketch and visualize original fashion concepts.</li>
      <li><strong>Entrepreneurship:</strong> Gain the knowledge required to start a home-based tailoring business or a professional boutique.</li>
    </ul>

    <h4>Target Audience</h4>
    <ul>
      <li>Aspiring fashion designers and dressmakers.</li>
      <li>Individuals looking to start their own clothing line or boutique.</li>
      <li>Hobbyists who want to achieve professional standards in garment making.</li>
    </ul>
  </div>
);

const certIctDescription = (
  <div className="course-details">
    <h3>Certificate in ICT (Foundation for the Digital Age)</h3>
    <p>The Certificate in ICT is an entry-level program designed to provide a solid foundation in computer literacy and digital essential skills. This course is perfect for beginners, students, or professionals who want to formalize their computer knowledge and gain confidence in using modern technology for daily tasks and office work.</p>
    
    <h4>Course Overview</h4>
    <ul>
      <li><strong>Duration:</strong> 3 Months</li>
      <li><strong>Total Credits:</strong> 15 Credits</li>
      <li><strong>Structure:</strong> Focused on Practical Competency & Basic Theory</li>
    </ul>

    <h4>Module Breakdown</h4>
    <div className="table-responsive">
      <table className="module-table">
        <thead>
          <tr>
            <th>Module</th>
            <th>Title</th>
            <th>Credits</th>
            <th>Key Topics</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>01</td><td>Computer Essentials</td><td>3</td><td>Hardware components, operating systems (Windows), and file management.</td></tr>
          <tr><td>02</td><td>Microsoft Office Suite</td><td>4</td><td>Essential skills in Word, Excel, and PowerPoint for documentation and data.</td></tr>
          <tr><td>03</td><td>Internet & Online Safety</td><td>3</td><td>Effective web searching, email communication, and basic cybersecurity habits.</td></tr>
          <tr><td>04</td><td>Introduction to Graphics</td><td>3</td><td>Basic image editing and creating simple digital layouts for social media.</td></tr>
          <tr><td>05</td><td>Basic Troubleshooting</td><td>2</td><td>Identifying common PC issues, software installation, and system maintenance.</td></tr>
        </tbody>
      </table>
    </div>

    <h4>Course Description</h4>
    <p>The Certificate in ICT serves as the first step into the world of professional computing. It takes the mystery out of technology by teaching students how computers actually work—from the physical hardware to the software that powers global business. Students will move from being "casual users" to "competent operators," mastering the tools required for efficient office administration and digital communication.</p>

    <h4>Key Learning Outcomes</h4>
    <ul>
      <li><strong>Digital Literacy:</strong> Navigate modern operating systems and professional software with ease.</li>
      <li><strong>Office Mastery:</strong> Create professional reports, calculate budgets in spreadsheets, and design engaging presentations.</li>
      <li><strong>Web Proficiency:</strong> Use the internet safely for research, communication, and basic cloud-based collaboration.</li>
      <li><strong>Technical Confidence:</strong> Gain the ability to handle minor technical glitches and manage digital files securely.</li>
    </ul>

    <h4>Target Audience</h4>
    <ul>
      <li>School leavers preparing for higher education.</li>
      <li>Job seekers looking to add essential computer skills to their CV.</li>
      <li>Small business owners wanting to digitize their operations.</li>
      <li>Anyone looking to build a foundation before moving on to a Diploma in ICT.</li>
    </ul>
  </div>
);

const certMsOfficeDescription = (
  <div className="course-details">
    <h3>Certificate in Microsoft Office Specialist (MOS)</h3>
    <p>This targeted certificate program is designed to transform students into power users of the world's most essential office software. The curriculum focuses on high-level proficiency in the Microsoft Office Suite, ensuring that graduates can handle complex data, professional documentation, and dynamic presentations with speed and precision.</p>
    
    <h4>Course Overview</h4>
    <ul>
      <li><strong>Duration:</strong> 2 Months (Fast-Track)</li>
      <li><strong>Total Credits:</strong> 10 Credits</li>
      <li><strong>Structure:</strong> 100% Practical & Project-Based Learning</li>
    </ul>

    <h4>Module Breakdown</h4>
    <div className="table-responsive">
      <table className="module-table">
        <thead>
          <tr>
            <th>Module</th>
            <th>Title</th>
            <th>Credits</th>
            <th>Key Topics</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>01</td><td>Advanced MS Word</td><td>3</td><td>Mail merge, table of contents, tracking changes, and professional report formatting.</td></tr>
          <tr><td>02</td><td>MS Excel for Data</td><td>3</td><td>Formulas & functions (VLOOKUP, IF), Pivot Tables, data visualization, and charts.</td></tr>
          <tr><td>03</td><td>MS PowerPoint Pro</td><td>2</td><td>Slide master, transitions, embedding media, and creating engaging pitch decks.</td></tr>
          <tr><td>04</td><td>Outlook & Office Tools</td><td>2</td><td>Email management, calendar scheduling, and an introduction to MS Access basics.</td></tr>
        </tbody>
      </table>
    </div>

    <h4>Course Description</h4>
    <p>The Certificate in MS Office is more than just a basic typing course; it is a professional toolkit for the modern workplace. In an era where data-driven decisions are key, mastering Excel and Word is a non-negotiable skill. Students will learn how to automate repetitive tasks, organize vast amounts of information, and present their ideas with professional visual flair.</p>

    <h4>Key Learning Outcomes</h4>
    <ul>
      <li><strong>Data Mastery:</strong> Use Excel to analyze numbers and create automated spreadsheets that save time.</li>
      <li><strong>Professional Branding:</strong> Design high-quality documents and letters that meet international corporate standards.</li>
      <li><strong>Effective Communication:</strong> Create presentations that capture attention and communicate complex ideas simply.</li>
      <li><strong>Workflow Efficiency:</strong> Organize emails, tasks, and schedules to maximize daily productivity.</li>
    </ul>

    <h4>Target Audience</h4>
    <ul>
      <li>Administrative staff and office managers.</li>
      <li>University students needing to format theses or research papers.</li>
      <li>Job seekers wanting to stand out with "Advanced MS Office" skills on their resume.</li>
      <li>Account assistants and data entry operators.</li>
    </ul>
  </div>
);

const webDevDescription = (
  <div className="course-details">
    <h3>Certificate in Web Development (Modern Web Essentials)</h3>
    <p>The Certificate in Web Development is a practical, fast-track program designed to take students from zero coding knowledge to building functional, responsive websites. This course focuses on the "Front-End" of the web—the parts that users see and interact with—while introducing the logic behind modern web applications.</p>
    
    <h4>Course Overview</h4>
    <ul>
      <li><strong>Duration:</strong> 3 Months</li>
      <li><strong>Total Credits:</strong> 15 Credits</li>
      <li><strong>Structure:</strong> 90% Hands-on Coding & Project Building</li>
    </ul>

    <h4>Module Breakdown</h4>
    <div className="table-responsive">
      <table className="module-table">
        <thead>
          <tr>
            <th>Module</th>
            <th>Title</th>
            <th>Credits</th>
            <th>Key Topics</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>01</td><td>Web Architecture & HTML5</td><td>3</td><td>Understanding how the web works, semantic HTML, and document structure.</td></tr>
          <tr><td>02</td><td>Styling with CSS3</td><td>4</td><td>Colors, typography, the Box Model, Flexbox, and Grid layouts.</td></tr>
          <tr><td>03</td><td>Responsive Design & Frameworks</td><td>3</td><td>Creating mobile-friendly sites and an introduction to Bootstrap or Tailwind.</td></tr>
          <tr><td>04</td><td>JavaScript Fundamentals</td><td>3</td><td>Basic logic, variables, loops, and making websites interactive (DOM manipulation).</td></tr>
          <tr><td>05</td><td>Hosting & Deployment</td><td>2</td><td>Domain names, web hosting basics, and launching a live site using GitHub or FTP.</td></tr>
        </tbody>
      </table>
    </div>

    <h4>Course Description</h4>
    <p>The Certificate in Web Development is the ultimate entry point into the tech industry. In today's digital world, every business needs a website, and this course provides the skills to build them from scratch. We move beyond simple "drag-and-drop" builders to teach students how to write clean, professional code. By the end of the 12 weeks, every student will have designed and deployed their own personal portfolio website to the live internet.</p>

    <h4>Key Learning Outcomes</h4>
    <ul>
      <li><strong>Code from Scratch:</strong> Master HTML and CSS to build custom layouts without relying on templates.</li>
      <li><strong>Mobile-First Thinking:</strong> Ensure your websites look perfect on smartphones, tablets, and desktops.</li>
      <li><strong>Interactivity:</strong> Use JavaScript to create buttons that work, forms that validate, and dynamic content.</li>
      <li><strong>Professional Workflow:</strong> Learn the industry-standard tools used by developers worldwide, including VS Code and browser developer tools.</li>
    </ul>

    <h4>Target Audience</h4>
    <ul>
      <li>Aspiring developers looking for a career change.</li>
      <li>Graphic designers wanting to add web design to their skill set.</li>
      <li>Entrepreneurs who want to build and manage their own business websites.</li>
      <li>Students who want a head start before pursuing a full Diploma in ICT.</li>
    </ul>
  </div>
);

const aiDescription = (
  <div className="course-details">
    <h3>Certificate in Artificial Intelligence (AI Essentials)</h3>
    <p>This certificate is designed for students and professionals who want to understand and harness the power of AI. Instead of focusing solely on complex coding, this course emphasizes Generative AI and AI Productivity, teaching students how to use modern tools to enhance their creative and professional work.</p>
    
    <h4>Course Overview</h4>
    <ul>
      <li><strong>Duration:</strong> 3 Months</li>
      <li><strong>Total Credits:</strong> 15 Credits</li>
      <li><strong>Structure:</strong> Hands-on Workshops with AI Tools</li>
    </ul>

    <h4>Module Breakdown</h4>
    <div className="table-responsive">
      <table className="module-table">
        <thead>
          <tr>
            <th>Module</th>
            <th>Title</th>
            <th>Credits</th>
            <th>Key Topics</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>01</td><td>Introduction to Modern AI</td><td>3</td><td>History of AI, Machine Learning vs. Deep Learning, and AI ethics.</td></tr>
          <tr><td>02</td><td>Prompt Engineering Mastery</td><td>3</td><td>Crafting effective prompts for ChatGPT, Gemini, and Claude to get precise results.</td></tr>
          <tr><td>03</td><td>AI for Content Creation</td><td>3</td><td>Generating images and videos with Midjourney, Adobe Firefly, and Canva AI.</td></tr>
          <tr><td>04</td><td>AI for Productivity & Office</td><td>3</td><td>Using AI in Excel, automating emails, and AI-powered presentation tools.</td></tr>
          <tr><td>05</td><td>Basic AI Programming</td><td>3</td><td>Introduction to Python for AI and using AI APIs to build simple applications.</td></tr>
        </tbody>
      </table>
    </div>

    <h4>Course Description</h4>
    <p>The Certificate in AI is built for the future of work. As AI becomes an everyday tool, knowing how to collaborate with these systems is a vital skill. This course moves beyond the theory to give students "keyboard-ready" skills. Whether you are a designer looking to speed up your workflow, a student wanting to research faster, or an aspiring developer, this program provides the roadmap to becoming AI-literate.</p>

    <h4>Key Learning Outcomes</h4>
    <ul>
      <li><strong>Prompt Expertise:</strong> Learn the secret "formulas" to make AI write, code, and analyze data exactly how you want.</li>
      <li><strong>Visual Synthesis:</strong> Create high-quality logos, photos, and video clips in seconds using generative models.</li>
      <li><strong>Workflow Automation:</strong> Use AI tools to handle repetitive office tasks, allowing you to focus on high-level creativity.</li>
      <li><strong>Future-Proofing:</strong> Understand the limitations and ethical concerns of AI to use the technology responsibly.</li>
    </ul>

    <h4>Target Audience</h4>
    <ul>
      <li>Students wanting to stay ahead in the rapidly changing job market.</li>
      <li>Graphic designers and content creators looking to integrate AI into their art.</li>
      <li>Business professionals and managers aiming to increase team productivity.</li>
      <li>Beginners curious about how AI actually works behind the scenes.</li>
    </ul>
  </div>
);

const allCourses = [
  { id: 1, type: 'Diploma', name: 'Diploma in ICT', icon: <Code size={32}/>, duration: '6 Months', description: ictDescription },
  { id: 2, type: 'Diploma', name: 'Diploma in English', icon: <Book size={32}/>, duration: '6 Months', description: englishDescription },
  { id: 3, type: 'Diploma', name: 'Diploma in Psychology', icon: <Brain size={32}/>, duration: '6 Months', description: psychologyDescription },
  { id: 4, type: 'Diploma', name: 'Diploma in Beauty Culture', icon: <Sparkles size={32}/>, duration: '6 Months', description: beautyDescription },
  { id: 5, type: 'Diploma', name: 'Diploma in Cookery', icon: <Coffee size={32}/>, duration: '6 Months', description: cookeryDescription },
  { id: 6, type: 'Diploma', name: 'Diploma in Dress Making & Designing', icon: <Scissors size={32}/>, duration: '6 Months', description: dressMakingDescription },
  { id: 7, type: 'Certificate', name: 'Certificate in ICT', icon: <Monitor size={32}/>, duration: '3 Months', description: certIctDescription },
  { id: 8, type: 'Certificate', name: 'Certificate in MS Office', icon: <Monitor size={32}/>, duration: '3 Months', description: certMsOfficeDescription },
  { id: 9, type: 'Certificate', name: 'Certificate in Web Developing', icon: <Code size={32}/>, duration: '3 Months', description: webDevDescription },
  { id: 10, type: 'Certificate', name: 'Certificate in AI', icon: <Brain size={32}/>, duration: '3 Months', description: aiDescription },
];

const Courses = () => {
  const [filter, setFilter] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState(null);

  const filteredCourses = filter === 'All' 
    ? allCourses 
    : allCourses.filter(c => c.type === filter);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (selectedCourse) {
      document.body.style.overflow = 'hidden';
      window.scrollTo(0, 0); // Scroll to top when modal opens
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [selectedCourse]);

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && selectedCourse) {
        setSelectedCourse(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [selectedCourse]);

  return (
    <div className="courses-page animate-fade-in">
      <div className="container py-8">
        <div className="courses-header text-center mb-12">
          <h1 className="text-gradient">Our Academic Programs</h1>
          <p className="subtitle">Discover our comprehensive range of diplomas and certificate courses designed for your success.</p>
        </div>

        <div className="filter-controls flex justify-center mb-10 gap-4">
          {['All', 'Diploma', 'Certificate'].map(f => (
            <button 
              key={f}
              className={`btn ${filter === f ? 'btn-primary' : 'btn-outline'}`}
              onClick={() => setFilter(f)}
            >
              {f}s
            </button>
          ))}
        </div>

        <div className="courses-grid">
          {filteredCourses.map((course, i) => (
            <div key={course.id} className="course-card glass" style={{ animationDelay: `${i * 50}ms` }}>
              <div className="course-icon-wrapper">
                {course.icon}
              </div>
              <div className="course-content">
                <span className="course-type">{course.type}</span>
                <h3 className="course-name">{course.name}</h3>
                <p className="course-duration">Duration: {course.duration}</p>
                <button 
                  className="btn btn-secondary w-full mt-4" 
                  onClick={() => setSelectedCourse(course)}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Overlay */}
        {selectedCourse && (
          <div className="modal-overlay" onClick={() => setSelectedCourse(null)}>
            <div className="modal-content animate-fade-in" onClick={e => e.stopPropagation()}>
              <button className="modal-close" onClick={() => setSelectedCourse(null)}>
                <X size={28} />
              </button>
              <div className="modal-header">
                <div className="modal-icon-wrapper">
                  {selectedCourse.icon}
                </div>
                <h2>{selectedCourse.name}</h2>
                <span className="course-type" style={{ marginLeft: '1rem', marginBottom: 0 }}>{selectedCourse.type}</span>
              </div>
              <div className="modal-body">
                {selectedCourse.description}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;
