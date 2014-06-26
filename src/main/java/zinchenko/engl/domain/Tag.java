package zinchenko.engl.domain;

import javax.persistence.*;

@Entity
@Table(name="tag")
public class Tag {

    @Id
    @Column(name = "tag_id")
    @GeneratedValue(generator = "seq_gen", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "seq_gen", sequenceName = "tag_seq")
    private Long id;

    @Column(name="name")
    private String name;

    @Column(name="color")
    private String color;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }
}
