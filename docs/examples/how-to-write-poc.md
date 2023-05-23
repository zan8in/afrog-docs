# afrog PoC Writing Tutorial

afrog is a powerful vulnerability scanning tool that supports user-defined Proof of Concept (PoC) writing. Writing your own PoCs can help you extend the functionality of afrog to meet specific vulnerability detection needs. Here is a brief afrog PoC writing tutorial to help you get started with writing your own PoCs.

1. Understand the PoC structure and syntax:
   - PoCs are written in YAML format.
   - They contain necessary information for vulnerability validation, such as vulnerability name, description, validation rules, etc.
   - You can refer to the [built-in PoCs in afrog](https://github.com/zan8in/afrog/tree/main/pocs/afrog-pocs) to understand their structure and syntax.

2. Create a new PoC file:
   - Use any text editor to create a new YAML file, e.g., `my-poc.yaml`.

3. Write the PoC content:
   - Fill in the necessary information for your PoC based on the vulnerability you want to validate.
   - Make sure to provide accurate vulnerability name, description, and validation rules.
   - Optionally, you can add other fields like impact scope, remediation recommendations, etc.

4. Save and test the PoC:
   - Save the written PoC to your local machine.
   - Run the afrog command in your terminal and specify the target URL using the `-t` parameter.
   - Use the `-poc-file` or `-P` parameter to specify the path to your written PoC file.
   - Run the afrog scan to validate if your PoC is effective.

5. Debug and optimize the PoC:
   - If any issues or unexpected results occur during the validation process, check the syntax and logic of your PoC.
   - You can use the `-pd` command provided by afrog to view the detailed content of a specific PoC for further debugging and optimization.

6. Contribute and share:
   - If your PoC successfully validates a vulnerability, consider contributing it to the afrog community.
   - You can submit a Pull Request to add your PoC to the official afrog repository and share your achievements with other users.

Please note that writing effective PoCs requires a certain level of security technical knowledge and experience. Ensure to follow legal and ethical guidelines when writing and using PoCs, and only use them within authorized scopes.

We hope this brief tutorial helps you get started with writing your own afrog PoCs. Good luck!