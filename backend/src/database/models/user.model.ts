import { Table, DataType, Model, AutoIncrement, PrimaryKey, Column } from "sequelize-typescript";

@Table({
  tableName: "users",
  timestamps: true,
  modelName: "User",
})
 class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare userName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare password: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  declare phoneNumber: BigInt;
  @Column({
    type: DataType.ENUM("superAdmin", "institution","instructor", "student"),
    defaultValue: "student",
  })
  declare userRole: string;
}


export default User;




