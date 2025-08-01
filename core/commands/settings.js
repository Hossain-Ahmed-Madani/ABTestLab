import chalk from "chalk";
import { Command } from "commander";
import fs from "fs-extra";
import kleur from "kleur";
import path from "path";
import prompts from "prompts";

import { runCLI } from "../index.js";

const settingsPath = path.join(process.cwd(), "settings.json");

export const settingsCommand = new Command("settings")
    .description(
        "Modify CLI settings interactively with arrow navigation and search"
    )
    .action(async () => {
        let exit = false;
        let settings;
        let newValue;

        try {
            const exists = await fs.pathExists(settingsPath);
            if (!exists) {
                console.log(
                    kleur.red(
                        `Settings file not found. Please run "npm run cli init" to initialize the settings.`
                    )
                );
                process.exit(1);
            }

            settings = await fs.readJson(settingsPath);

            while (!exit) {
                const response = await prompts({
                    type: "select",
                    name: "setting",
                    message: "Select setting to modify or choose an option:",
                    choices: [
                        {
                            title:
                                chalk.cyan("📚 Server Port: ") +
                                `${chalk.blue(settings.portNumber)}`,
                            value: "portNumber",
                        },
                        {
                            title:
                                chalk.cyan(
                                    "📜 Reload the webpage when the JavaScript file will be saved: "
                                ) +
                                `${settings.jsReload ? chalk.green("Yes") : chalk.red("No")}`,
                            value: "jsReload",
                        },
                        {
                            title:
                                chalk.cyan(
                                    "🎨 Reload the webpage when the SCSS file will be saved: "
                                ) +
                                `${settings.cssReload ? chalk.green("Yes") : chalk.red("No")}`,
                            value: "cssReload",
                        },
                        {
                            title:
                                chalk.cyan(
                                    "🖼️  Show the user interface on the targeted webpage: "
                                ) +
                                `${settings.displayUI ? chalk.green("Yes") : chalk.red("No")}`,
                            value: "displayUI",
                        },
                        {
                            title:
                                chalk.cyan(
                                    "📚 Total number of stored history records: "
                                ) + `${chalk.blue(settings.maxHistoryRecords)}`,
                            value: "maxHistoryRecords",
                        },
                        {
                            title: chalk.cyan("📦 Bundler Settings"),
                            value: "bundlerSettings",
                        },
                        { title: chalk.magenta("🔙 Back"), value: "back" },
                        {
                            title: chalk.green("💾 Save and Exit"),
                            value: "saveExit",
                        },
                        { title: chalk.red("❌ Exit"), value: "exit" },
                    ],
                });

                if (response.setting === "exit") {
                    exit = true;
                    process.exit(0);
                } else if (response.setting === "saveExit") {
                    await fs.writeJson(settingsPath, settings, { spaces: 4 });

                    console.log(kleur.green("Settings saved successfully!"));
                    exit = true;
                    process.exit(0);
                } else if (response.setting === "back") {
                    runCLI();
                    return null;
                } else if (response.setting === "portNumber") {
                    const portResponse = await prompts({
                        type: "number",
                        name: "portNumber",
                        message: `${chalk.yellow("Hint : (Most available ports are between 3000 and 9000")} \n${chalk.red("⚠️  Do not forget to change the port in your browser snippet!")} \n Enter a new port number (1 - 65535): \n`,
                        min: 1,
                        max: 65535,
                        initial: settings.portNumber,
                        validate: (value) =>
                            value >= 1 && value <= 65535
                                ? true
                                : "Please choose a number between 1 and 65535",
                    });

                    if (portResponse.portNumber === undefined) {
                        continue;
                    }

                    newValue = portResponse.portNumber;
                    settings.portNumber = newValue;
                } else if (response.setting === "bundlerSettings") {
                    let bundlerExit = false;
                    while (!bundlerExit) {
                        const bundlerOptions = [
                            {
                                title: `${chalk.cyan("📦 Generate Pure JS:")} ${settings.bundler.generatePureJS ? chalk.green("Yes") : chalk.red("No")}`,
                                value: "generatePureJS",
                            },
                            {
                                title: `${chalk.cyan("📦 Generate Pure CSS:")} ${settings.bundler.generatePureCSS ? chalk.green("Yes") : chalk.red("No")}`,
                                value: "generatePureCSS",
                            },
                            {
                                title: `${chalk.cyan("📦 Generate Minified JS:")} ${settings.bundler.generateMinifiedJS ? chalk.green("Yes") : chalk.red("No")}`,
                                value: "generateMinifiedJS",
                            },
                            {
                                title: `${chalk.cyan("📦 Generate Minified CSS:")} ${settings.bundler.generateMinifiedCSS ? chalk.green("Yes") : chalk.red("No")}`,
                                value: "generateMinifiedCSS",
                            },
                            {
                                title: `${chalk.cyan("📦 Generate JS with CSS:")} ${settings.bundler.generateJSWithCSS ? chalk.green("Yes") : chalk.red("No")}`,
                                value: "generateJSWithCSS",
                            },
                            {
                                title: `${chalk.cyan("📦 Generate Minified JS with Minified CSS:")} ${settings.bundler.generateMinifiedJSWithCSS ? chalk.green("Yes") : chalk.red("No")}`,
                                value: "generateMinifiedJSWithCSS",
                            },
                            { title: chalk.magenta("🔙 Back"), value: "back" },
                            { title: chalk.red("❌ Exit"), value: "exit" },
                        ];

                        const bundlerResponse = await prompts({
                            type: "select",
                            name: "bundlerSetting",
                            message: "Select a bundler setting to modify:",
                            choices: bundlerOptions,
                        });

                        if (bundlerResponse.bundlerSetting === "exit") {
                            bundlerExit = true;
                            exit = true;
                            console.log(kleur.blue("See you soon!"));
                            process.exit(0);
                        }

                        if (bundlerResponse.bundlerSetting === "back") {
                            bundlerExit = true;
                            continue;
                        }

                        const settingKey = bundlerResponse.bundlerSetting;

                        const toggleResponse = await prompts({
                            type: "select",
                            name: "newValue",
                            message: `Set ${settingKey} to:`,
                            choices: [
                                { title: chalk.green("✅ Yes"), value: true },
                                { title: chalk.red("🔴 No"), value: false },
                                {
                                    title: chalk.magenta("🔙 Back"),
                                    value: "back",
                                },
                                { title: chalk.red("❌ Exit"), value: "exit" },
                            ],
                        });

                        if (toggleResponse.newValue === "exit") {
                            bundlerExit = true;
                            exit = true;
                            console.log(kleur.blue("See you soon!"));
                            process.exit(0);
                        }

                        if (toggleResponse.newValue === "back") {
                            continue;
                        }

                        settings.bundler[settingKey] = toggleResponse.newValue;
                    }
                } else if (response.setting === "maxHistoryRecords") {
                    const historyResponse = await prompts({
                        type: "number",
                        name: "maxHistoryRecords",
                        message:
                            "Choose a new value for maximum number of history records (1 - 20):",
                        min: 1,
                        max: 20,
                        initial: settings.maxHistoryRecords,
                        validate: (value) =>
                            value >= 1 && value <= 20
                                ? true
                                : "Please choose a number between 1 and 20",
                    });

                    if (historyResponse.maxHistoryRecords === undefined) {
                        continue;
                    }

                    newValue = historyResponse.maxHistoryRecords;
                    settings.maxHistoryRecords = newValue;
                } else if (
                    response.setting === "cssReload" ||
                    response.setting === "jsReload" ||
                    response.setting === "displayUI"
                ) {
                    const reloadResponse = await prompts({
                        type: "select",
                        name: "reload",
                        message: `Choose new value for ${response.setting === "cssReload" ? "CSS" : response.setting === "jsReload" ? "JS" : "UI"} reload:`,
                        choices: [
                            { title: chalk.green("✅ Yes"), value: true },
                            { title: chalk.red("🔴 No"), value: false },
                            { title: chalk.magenta("🔙 Back"), value: "back" },
                            { title: chalk.red("❌ Exit"), value: "exit" },
                        ],
                    });

                    if (reloadResponse.reload === "exit") {
                        exit = true;
                        console.log(kleur.blue("See you soon!"));
                        process.exit(0);
                    }

                    if (reloadResponse.reload === "back") {
                        continue;
                    }

                    newValue = reloadResponse.reload;
                    settings[response.setting] = newValue;
                }
            }
        } catch (error) {
            console.error(
                kleur.red(`Error updating settings: ${error.message}`)
            );
            process.exit(1);
        }
    });

export default settingsCommand;
