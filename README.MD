## Setup

1. scaricato java nuovo
2. trovato il path locale di java  (trovato nel pannello java dentro system preferences)
3. creato un alias java18 che punta al path locale di java
4. scaricato chromedriver ( http://chromedriver.storage.googleapis.com/index.html?path=2.20/ )
5. ho fatto partire selenium con: java18 -jar path_del_file_selenium.jar
6. creato la configurazione di test, in first_test_env/conf.js. Qui dentro:
   * identifica a quale selenium collegarsi ( in questo caso un processo locale )
   * identifica quale chromedriver usare (il path)
   * configura il framework di test usare (jasmine2)
   * configura in quali cartelle pescare i test
   * assegna eventuali gruppi di test a nomi, per poter fare test "a gruppi" (sez. suites)
