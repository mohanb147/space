pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "sudo npm install"
                sh "sudo npm run build"
            }
        }
        stage("Deploy") {
            steps {
               
             sshagent(['d872c27c-52cb-4822-8328-fa9254d0ee07']) {
                       
                        sh "scp -o StrictHostKeyChecking=no cp -r ${WORKSPACE}/build/ ec2-user@172.31.60.103:/var/www/jenkins-react-app/"
                       
            }
        }
}
        stage("start") {
            steps {
                 sh "screen -d -m -S screen.npmStart npm start"
            }
        }
    }
}
