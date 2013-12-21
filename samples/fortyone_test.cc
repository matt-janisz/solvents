#include "fortyone.h"
#include "gtest/gtest.h"

int fortyone(void);

TEST(FortyoneTest, Equals41) {
  EXPECT_EQ(41, fortyone());
}
