# Image Search
Repository for searching images using AWS ElasticSearch      
Hello   
This image searcher was developed by Jigyansoo Das      

It has been developed using Angular, Node.js and AWS ElasticSearch   

To run the project, execute the following commands:   
  i) Execute elasticsearch: Open a terminal and then go to the directory of installation of elasticsearch and then run: .\bin\elasticsearch.bat   
     To test elasticsearch, go to localhost:9200   
  ii) Execute server file: Open another terminal and then go to the directory of the server file and then run: node server2.js   
  iii) Execute angular file: Open another terminal and then go to the directory of the search project and run: ng serve search --open    
  iv) Use config.json to pass your credentials into the node.js script. 
  
Script has been written to migrate data from RDS to ElasticSearch which will run each time the server file is executed.    
To run the test file, change package.json to include mocha in it    
To run the test, navigate to the project directory and type: mocha    
