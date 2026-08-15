<?php
class Database {
   
    private $host = 'sql204.infinityfree.com';
    private $user = 'if0_42620001';
    private $pass = 'Doanhdz1234';
    private $name = 'if0_42620001_buoi2';
    private $port = '3306';

    private $pdo;
    private static $instance = null;

    private function __construct() {
        try {
            $dsn = "mysql:host={$this->host};port={$this->port};dbname={$this->name};charset=utf8mb4";
            $this->pdo = new PDO($dsn, $this->user, $this->pass, [
                PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
            ]);
        } catch (PDOException $e) {
            die("Lỗi kết nối CSDL: " . $e->getMessage());
        }
    }
 
    public static function getInstance() {
        if (self::$instance === null) {
            self::$instance = new Database();
        }
        return self::$instance;
    }

    public function getConn() {
        return $this->pdo;
    }
}
