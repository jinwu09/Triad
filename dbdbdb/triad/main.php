<?php
    require_once("./config/database.php");
    require_once("./models/auth.php");
    require_once("./models/get.php");

    $db = new Connection();
    $pdo = $db->connect();

    $auth = new Auth($pdo);
    $get = new Get($pdo);

    $req = [];
    if(isset($_REQUEST['request'])){
        $req = explode('/', rtrim($_REQUEST['request'], '/'));
    }else{
        $req = array("errorcatcher");
    }

    switch($_SERVER['REQUEST_METHOD']){
        case 'POST':
            switch($req[0]){
                case 'login':
                    $d = json_decode(file_get_contents("php://input"));
                    echo json_encode($auth->login($d));
                    break;
                case 'register':
                    $d = json_decode(file_get_contents("php://input"));
                    echo json_encode($auth->register($d));
                    break;
                case 'get_product_list':
                    $d = json_decode(file_get_contents("php://input"));
                    echo json_encode($get->get_product_list($d));
                    break;
                default: 
                    echo "no endpoint on post";
                    break;
            }
            break;
        default:
            echo "Prohibited";
            break;
    }



?>