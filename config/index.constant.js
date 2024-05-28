
const server = 'local'

const serverConfiguration = {
    'local' : {
        baseUrl :'http://localhost:3000/', 
        mainApp : 'http://localhost:3001/',
        serverURL :'https://api.jobmq.com/api',
        serverFileURL : 'https://api.jobmq.com/'
    },
    'custom' :{
        baseUrl :'https://jobmqdemoapp.vercel.app/', 
        mainApp : 'https://jobmqmain.netlify.app/',
        serverURL :'https://api.jobmq.com/api',
        serverFileURL : 'https://api.jobmq.com/'
    },
    'staging' : {
        baseUrl :'https://staging.jobs.jobmq.com/', 
        mainApp : 'https://staging.jobmq.com/',
        serverURL :'https://staging.api.jobmq.com/api',
        serverFileURL : 'https://staging.api.jobmq.com/'
    },
    'validation' : {
        baseUrl :'https://validation.jobs.jobmq.com/', 
        mainApp : 'https://validation.jobmq.com/',
        serverURL :'https://validation.api.jobmq.com/api',
        serverFileURL : 'https://validation.api.jobmq.com/'
    },
    'pro' : {
        baseUrl :'https://jobs.jobmq.com/', 
        mainApp : 'https://jobmq.com/',
        serverURL :'https://api.jobmq.com/api',
        serverFileURL : 'https://api.jobmq.com/'
    }
}

const socialURLS = {
    facebook : "https://www.facebook.com/JOBMQ-921344251566840/",
    twitter : "https://twitter.com/JOBMQ1/",
    linkedin : "https://www.linkedin.com/company/jobmq/",
    instagram : "https://www.instagram.com/jobmq/", 
}


module.exports.serverConfiguration = serverConfiguration[server];
module.exports.socialURLS = socialURLS;