package samples.01;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertThat;

import org.junit.Test;

public class ATest {
  private final A a = new A();

  @Test
  public void testFortyTwo() {
    assertThat(a.fortyTwo(), equalTo(42));
  }
}
