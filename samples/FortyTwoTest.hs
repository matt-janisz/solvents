import Test.Framework
import Test.HUnit
import Test.Framework.Providers.HUnit
import Test.Framework.Providers.QuickCheck2

import Samples.FortyTwo

main = defaultMain tests

tests = [
        testGroup "Sorting Group 1" [
		testCase "fortytwo" test_fortytwo
            ]
    ]

test_fortytwo = fortytwo @=? 42
