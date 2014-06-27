package zinchenko.engl.dao.impl;

import com.github.springtestdbunit.DbUnitTestExecutionListener;
import com.github.springtestdbunit.annotation.DatabaseSetup;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.TestExecutionListeners;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

/**
 * Created by zinchenko on 27.06.14.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({"classpath:dbUnitHibernate-applicationContext.xml"})
@DatabaseSetup("classpath:zinchenko/dataset.xml")
@TestExecutionListeners({DbUnitTestExecutionListener.class})
public class PermissionDaoImplTest {



}
