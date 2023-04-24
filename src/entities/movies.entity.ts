import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
class Movie {
  @PrimaryGeneratedColumn("increment")
  id: number;
  @Column({ type: "varchar", length: "50", unique: true })
  name: string;
  @Column({ nullable: true, type: "text" })
  description?: Text | null | undefined;
  @Column({ type: "integer" })
  duration: number;
  @Column({ type: "integer" })
  price: number;
}

export default Movie;
