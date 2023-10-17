//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {Test} from "forge-std/Test.sol";
import {Sample} from "../contracts/Sample.sol";

contract SampleTest is Test {
    Sample public sut;

    function setUp() public {
        sut = new Sample();
    }

    function testSample() public {
        assertFalse(false);
    }
}
