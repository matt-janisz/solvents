module Samples.FortyTwoSpec where
import Test.Hspec

import Samples.FortyTwo

main :: IO ()
main = hspec spec

spec :: Spec
spec = do
  describe "fortytwo" $ do
    it "should return 42" $ do
      fortytwo `shouldBe` 42
