package zinchenko.engl.dao;

import zinchenko.engl.domain.Test;

public interface TestDao {

    Test find(Long id);

    Test save(Test test);

    Test update(Test test);

}
