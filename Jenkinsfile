node {
        stage('Descarga fuentes') { 
			git 'https://github.com/hhidalgo90/testPureza/tree/master/wks'
        }
		
		stage('Compilar proyecto Maven') { 
			bat 'mvn package'
        }
}