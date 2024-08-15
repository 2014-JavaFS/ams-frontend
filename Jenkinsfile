// root executable for the groovy file to know it's working with a pipeline
pipeline{

// will find any available agent
    agent any

//     Setup environment to pull from the jenkins global for the credentials
    environment{
        dockerHub = credentials('dockerHub')
        CONTAINER = "ams-frontend-docker"
    }

// definte all of the stages
    stages{

// First stage is the build & deliver and name it
        stage('Build & Deliver'){

// Steps are all of the executables on shell, use "" when using environment variables
            steps{
                sh "docker login -u ${dockerHub_USR} -p ${dockerHub_PSW}"
                sh 'docker build -t jestercharles/ams-front-jenkins:1.0.0 .'
//pushes image to dockerHub
                sh 'docker push jestercharles/ams-front-jenkins:1.0.0'
            }

        }

        stage("Stop & Destroy"){
            steps{
                catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE'){
                    sh "docker stop ${CONTAINER}"
                    sh "docker rm ${CONTAINER}"
                }
            }
        }

        stage('Deploy'){

            steps{
                sh "docker run --name ${CONTAINER} -d -p 5005:5173 jestercharles/ams-front-jenkins:1.0.0"
            }

        }

    }


}