package zinchenko.engl.dao.impl;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import zinchenko.engl.bean.Image;
import zinchenko.engl.dao.ImageDao;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public class ImageDaoImpl implements ImageDao{

    @Autowired
    private SessionFactory sessionFactory;

    @Override
    public List<Image> findAll() {
        return sessionFactory.getCurrentSession()
                .createCriteria(Image.class).list();
    }

    @Transactional
    public void save(Image image){
        sessionFactory.getCurrentSession().save(image);
    }

    @Override
    public void delete(Long id) {
        Image image = new Image();
        image.setId(id);
        sessionFactory.getCurrentSession().delete(image);
    }

    @Override
    public Image find(Long id) {
        return (Image) sessionFactory.getCurrentSession().load(Image.class, id);
    }

    public SessionFactory getSessionFactory() {
        return sessionFactory;
    }

    public void setSessionFactory(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }
}
