#include "fortytwo.h"
#include "gtest/gtest.h"

int fortytwo();

TEST(FortytwoTest, Equals42) {
  EXPECT_EQ(42, fortytwo());
}
