package samples;

public class FortyTwoTest {
  private final FortyTwo fortyTwo = new FortyTwo();

  @Test
  public testFortyTwo() {
    assertEquals(42, fortyTwo.fortyTwo());
  }
}