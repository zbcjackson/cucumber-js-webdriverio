Feature: Blog

Scenario: Posts list
Given there are posts
|title        |content      |
|No Zuo No Die|blablablabla |
When check posts list
Then I can see
|title        |content      |
|No Zuo No Die|blablablabla |
