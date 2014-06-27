package zinchenko.engl.domain;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;

/**
 * Created by zinchenko on 27.06.14.
 */
@Entity
@Table(name = "permission")
public class Permission {

    @Id
    @Column(name="permission_id")
    @GeneratedValue(generator = "permission_generator", strategy = GenerationType.SEQUENCE)
    @SequenceGenerator(name = "permission_generator", sequenceName = "permission_seq")
    private Long id;

    @Column(name="permission")
    private String permission;

    public Long getId() {
        return id;
    }

    public Permission setId(Long id) {
        this.id = id;
        return this;
    }

    public String getPermission() {
        return permission;
    }

    public Permission setPermission(String permission) {
        this.permission = permission;
        return this;
    }
}
