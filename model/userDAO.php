<?php
// require_once 'user.php';
class UserDao{
    private $pdo;
    public function __construct(){
        include 'connection.php';
        $this->pdo=$pdo;
    }
    public function login($user){
        $query = "SELECT * FROM users WHERE Email=? AND Pass=?";
        $sentencia=$this->pdo->prepare($query);
        $email=$user->getEmail();
        $passwd=$user->getPassword();
        $sentencia->bindParam(1,$email);
        $sentencia->bindParam(2,$passwd);
        $sentencia->execute();
        $result=$sentencia->fetch(PDO::FETCH_ASSOC);
        $numRow=$sentencia->rowCount();
        if(!empty($numRow) && $numRow==1){
            $user->setName($result['name_user']);
            $user->setId_user($result['Id']);
            session_start();
            $_SESSION['user']=$user;
            return true;
        }else {
            return false;
        }
    }

    /**
     * Get the value of user
     */ 
    public function getUser()
    {
        return $this->user;
    }

    /**
     * Set the value of user
     *
     * @return  self
     */ 
    public function setUser($user)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Set the value of pdo
     *
     * @return  self
     */ 
    public function setPdo($pdo)
    {
        $this->pdo = $pdo;

        return $this;
    }
}

?>  