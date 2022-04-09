## 1 Install

Maven is a Java tool, so you must have Java installed in order to proceed.[How to install?](https://maven.apache.org/install.html)
After installation, type the following command to check maven is installed correctly. It should print out your installed version of Maven.

```
mvn --version
```

## 2 Creating a Project
```
mvn archetype:generate -DgroupId=com.mycompany.app -DartifactId=my-first-maven-app -DarchetypeArtifactId=maven-archetype-quickstart -DarchetypeVersion=1.4 -DinteractiveMode=false
```

[my-first-maven-app](https://github.com/luminecs/my-first-maven-app)

### 2.1 The POM

The `pom.xml` (Project Object Model) file is the core of a project's configuration in Maven. It is a single configuration file that contains the majority of information required to build a project in just the way you want.
[my-first-maven-app#pom.xml](https://github.com/luminecs/my-first-maven-app/blob/main/pom.xml)

### 2.2 Running Maven Tools

The most common default lifecycle phases executed.
- mvn **validate**: validate the project is correct and all necessary information is available.
- mvn **compile**: compile the source code of the project.
- mvn **test**: test the compiled source code using a sutiable unit testing framework. These tests should not require the code be packaged or deployed.
- mvn **package**: take the compiled code and package it in its distributable format, such as a JAR.
- mvn **integration-test**: process and deploy the package if necessary into an environment where integration tests can be run.
- mvn **verify**: run any checks to verify the package is valid and meets quality criteria.
- mvn **install**: install the package into the local repository, for use as a dependency in other projects locally.
- mvn **deploy**: done in an integration or release environment, copies the final package to the remote repository for sharing with other developers and projects.
- mvn **clean**: cleans up artifacts created by prior builds.
- mvn **site**: generates site documentation for this project.

Phases are actually mapped to underlying goals. Phases and goals can be executed in sequence.
```
mvn clean dependency:copy-dependencies package
```


