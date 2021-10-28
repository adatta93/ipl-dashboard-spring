# IPL Dashboard Spring
IPL Dashboard with Spring Boot with HSQL in memory DB and React 

# Deploy steps
1. Build the React app with npm run build. It will create the build files and then copy them to Java project's target folder. Path is hardcoded in react build script in package.json
2. Add server.port=${PORT:<port_no>} in application.properties of Java project. It will launch in <port_no> port in localhost, not default 8080. This step needed for Heroku deployment
3. Build the Java project with Maven Install. It will create the Jar, launching that will launch the website in localhost
4. Upload Jar directly to Heroku
    1. Run heroku plugins:install java (only 1 time per app)
    2. heroku deploy:jar target/<jar-name>.jar --app <heroku-app-name>
5. Both UI and API are part of same Jar, so they are accessed with same URL
