<?php
    class Auth{
        protected $pdo;

        public function __construct(\PDO $pdo){
            $this->pdo = $pdo;
        }

        public function login($d){
            $em = $d->email;
            $pw = $d->password;

            $sql = "SELECT * FROM accounts_tbl WHERE account_email='$em' AND account_password = '$pw' LIMIT 1";

            if($res = $this->pdo->query($sql)->fetchAll()){
                return array("data"=>array("account"=>$res[0]['account_id'],"account_email"=>$res[0]['account_email'],"account_fname"=>$res[0]['account_fname'],"account_lname"=>$res[0]['account_lname'],"account_address"=>$res[0]['account_address']));
            }else{
                return array("error"=>"Incorrect username or password");
            }
        }
    }
    

?>