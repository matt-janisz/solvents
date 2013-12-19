package samples;

// TODO(b0ri5): Prevent wildcard imports like this in favor of explicitly specifying them.
import static org.junit.Assert.*;
import static org.hamcrest.CoreMatchers.*;

import org.junit.Test;

public class FortyTwoTest {
  private final FortyTwo fortyTwo = new FortyTwo();

  @Test
  public void testFortyTwo() {
    assertThat(fortyTwo.fortyTwo(), equalTo(41));
  }
}
