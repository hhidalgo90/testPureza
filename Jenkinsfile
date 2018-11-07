node {
        stage('Descarga fuentes') { 
			git 'https://github.com/hhidalgo90/testPureza.git'
        }
		
		stage('Compilar proyecto Maven') { 
			bat 'mvn package'
        }
}