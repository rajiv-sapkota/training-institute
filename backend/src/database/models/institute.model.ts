import { Table, DataType, Model, PrimaryKey, Column } from "sequelize-typescript";

@Table({
  tableName: "institute",
  timestamps: true,
  modelName: "Institute",
})
class Institute extends Model {
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  declare id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare instituteName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare instituteEmail: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare instituteAddress: string;

  @Column({
    type: DataType.BIGINT,
    allowNull: false,
  })
  declare instituteContact: BigInt;

  @Column({
    type: DataType.STRING,
  })
  declare institutePAN: string;
  
    @Column({
    type: DataType.STRING,
  })
  declare instituteVAT: string;
}


export default Institute;




