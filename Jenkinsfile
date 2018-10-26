pipeline {
  agent any
  stages {
    stage('Build User Service') {
      parallel {
        stage('Build User Service') {
          steps {
            echo 'Building User Service'
          }
        }
        stage('Build Frontend Service') {
          steps {
            echo 'Building Front End Service'
          }
        }
      }
    }
    stage('Build Posts Service') {
      steps {
        echo 'Building Posts Service'
      }
    }
  }
}