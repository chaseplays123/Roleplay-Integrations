import mysql from "mysql2/promise";
                    
const pool = mysql.createPool("singlestore://Admin user:<Admin user Password>@svc-3482219c-a389-4079-b18b-d50662524e8a-shared-dml.aws-virginia-6.svc.singlestore.com:3333/db_chase_3b726?ssl={}");