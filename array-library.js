/* // The Array Model in Library is as follows
{
    "title": "Senior React Developer",
    "type": "Full-Time",
    "description": "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as React or Angular.",
    "location": "Boston, MA",
    "salary": "$70K - $80K",
    "company": {
      "name": "NewTek Solutions",
      "description": "NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
      "contactEmail": "contact@teksolutions.com",
      "contactPhone": "555-555-5555"
    }
  } */


    //Initialize the following variables:
    let jobArray = [];
    let jobId = 1;

    //Write a function to read all jobs:
    function getAll() {
        return jobArray;
      }
      

      /* Add a job function */

      function addJob(title, type, description, location, salary, company, name, description, contactEmail, contactPhone) {
        // Check if any parameter is empty or undefined
        if (!title || !type || !description || !location || !salary || !company || !name || !description || !contactEmail || !contactPhone) {
          return false;
        }
      
        const newJob = {
          id: jobId++, // Assigns a unique id and increments it
          title,
          type,
          description,
          location,
          salary,
          company,
          name,
          description,
          contactEmail,
          contactPhone
        };
      
        jobArray.push(newJob); // Adds the new job to the array
        return newJob; // Returns the added job object
      }


      //Write a function to update a job to the array:

       /* function updateJob(jobsArray, jobId, updatedJob) {
            const jobIndex = jobsArray.findIndex(job => job.id === jobId);
            if (jobIndex !== -1) {
                jobsArray[jobIndex] = { ...jobsArray[jobIndex], ...updatedJob };
            }
        }*/

    /* Update Job function */

        function updateJob(jobId, updatedData) {
            const job = findById(jobId);
            if (job) {
              // Update properties only if they are provided in updatedData
              if (updatedData.title) car.title = updatedData.title;
              if (updatedData.type) car.type = updatedData.type;
              if (updatedData.description) car.description = updatedData.description;
              if (updatedData.location) car.location = updatedData.location;
              if (updatedData.salary) car.salary = updatedData.salary;
              if (updatedData.company) car.company = updatedData.company;
              if (updatedData.name) car.name = updatedData.name;
              if (updatedData.description) car.description = updatedData.description;
              if (updatedData.contactEmail) car.contactEmail = updatedData.contactEmail;
              if (updatedData.contactPhone) car.contactPhone = updatedData.contactPhone;
              return job; // Returns the updated job object
            }
            return false; // Returns false if the job with the provided ID is not found
          }


        /* Remove Job function */

        function removeJob(jobsArray, jobToRemove) {
            const index = jobsArray.indexOf(jobToRemove);
            if (index > -1) {
                jobsArray.splice(index, 1);
            }
            return jobsArray;
        }

        /* Delete Job function */

        function deleteJob(jobsArray, jobId) {
            return jobsArray.filter(job => job.id !== jobId);
        }


        /*Exporting the Module */

        const job = {
            getAll,
            addJob,
            updateJob,
            removeJob,
            deleteJob,
          };
          
          module.exports = job;