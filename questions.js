const questions = [

    {
        
        question: "A student adds a few drops of phenolphthalein indicator to dilute sodium hydroxide solution. The solution turns pink. What will be observed when dilute hydrochloric acid is gradually added in excess?",
        options: [
            "The solution turns dark blue",
            "The solution remains pink and releases gas",
            "The solution becomes colourless",
            "The solution turns bright yellow"
        ],
        answer: 2
    },

    {
        question: "When a yellow turmeric paper strip is dipped into a solution of slaked lime (calcium hydroxide), what color change is observed?",
        options: [
            "Yellow turns deep blue",
            "Yellow turns reddish-brown",
            "Yellow turns completely green",
            "No change in color occurs"
        ],
        answer: 1
    },

    {
        question: "The sting of an ant contains formic acid (methanoic acid). Which of the following substances can be rubbed on the skin to provide relief through neutralization?",
        options: [
            "Dilute vinegar solution",
            "Lemon juice",
            "Moist baking soda (sodium hydrogen carbonate)",
            "Citric acid crystals"
        ],
        answer: 2
    },

    {
        question: "Which of the following statements about neutral substances is FALSE?",
        options: [
            "Pure distilled water is neutral to litmus",
            "Neutral substances do not change the color of either red or blue litmus",
            "Common salt (sodium chloride) solution is acidic because it comes from hydrochloric acid",
            "Sugar dissolved in water produces a neutral solution"
        ],
        answer: 2
    },

    {
        question: "Farmers treat soil with quicklime (calcium oxide) or slaked lime primarily when the soil:",
        options: [
            "Has become too acidic due to excessive chemical fertilizers",
            "Has become too alkaline and requires base addition",
            "Contains excess moisture and clay particles",
            "Lacks organic humus and requires decomposition"
        ],
        answer: 0
    },

    {
        question: "A clinical thermometer has a slight bend or 'kink' in its capillary tube near the bulb. What is the essential function of this kink?",
        options: [
            "It prevents the thermometer from cracking at body temperature",
            "It magnifies the thin mercury thread for easy reading",
            "It prevents the mercury level from falling on its own when removed from the mouth",
            "It allows the thermometer to measure temperatures up to 100°C"
        ],
        answer: 2
    },

    {
        question: "In coastal areas, a 'sea breeze' occurs during the daytime because:",
        options: [
            "Land heats up faster than water, causing warm air over land to rise and cool air from the sea to rush in",
            "Water heats up faster than land, causing warm air over water to rise toward the land",
            "High atmospheric radiation over the sea pushes air inland",
            "Ocean waves force cool air directly onto the coastline"
        ],
        answer: 0
    },

    {
        question: "An iron ball at 45°C is dropped into a bucket containing water at 45°C. What will be the net flow of heat energy?",
        options: [
            "Heat will flow from the iron ball to the water",
            "Heat will flow from the water to the iron ball",
            "No net transfer of heat will occur between them",
            "The temperature of both will spontaneously rise to 90°C"
        ],
        answer: 2
    },

    {
        question: "Which mode of heat transfer does NOT require any material medium and explains how solar energy reaches the Earth across outer space?",
        options: [
            "Conduction",
            "Convection",
            "Radiation",
            "Advection"
        ],
        answer: 2
    },

    {
        question: "Two simple pendulums, Pendulum A and Pendulum B, have identical string lengths of 1 meter. The bob of Pendulum A has a mass of 50 g, while the bob of Pendulum B has a mass of 100 g. Their time periods (T_A and T_B) will be:",
        options: [
            "T_A will be twice T_B",
            "T_B will be twice T_A",
            "T_A and T_B will be practically equal",
            "T_B will be four times T_A"
        ],
        answer: 2
    },

    {
        question: "A simple pendulum completes 40 complete oscillations in 80 seconds. What is the time period of this pendulum?",
        options: [
            "0.5 seconds",
            "2.0 seconds",
            "4.0 seconds",
            "320 seconds"
        ],
        answer: 1
    },

    {
        question: "A car is traveling along a highway at a uniform speed of 54 km/h. What is the speed of this vehicle expressed in standard SI units (m/s)?",
        options: [
            "15 m/s",
            "20 m/s",
            "25 m/s",
            "10 m/s"
        ],
        answer: 0
    },

    {
        question: "In a distance-time graph for the motion of an object, a straight line inclined at an angle to the time axis indicates that the object is:",
        options: [
            "At rest at a fixed position",
            "Moving with constant (uniform) speed",
            "Moving with increasing speed (accelerating)",
            "Moving with non-uniform velocity"
        ],
        answer: 1
    },

    {
        question: "An electric fuse wire is an essential safety device. It is specifically designed with:",
        options: [
            "Very high melting point and low resistance",
            "Low melting point so it melts quickly when excessive current flows",
            "Thick copper wire that never melts under any surge",
            "High insulating material to stop all electricity"
        ],
        answer: 1
    },

    {
        question: "Which of the following modifications will INCREASE the magnetic strength of an electromagnet made by winding insulated wire around an iron nail?",
        options: [
            "Decreasing the number of turns in the coil",
            "Replacing the iron nail with a plastic rod",
            "Increasing the number of turns in the coil and using a stronger electric current",
            "Reversing the battery terminals while reducing current"
        ],
        answer: 2
    },

    {
        question: "In the standard circuit symbol of an electric cell, the longer vertical line and the shorter thicker vertical line represent:",
        options: [
            "Negative terminal and positive terminal respectively",
            "Positive terminal and negative terminal respectively",
            "Open switch and closed switch respectively",
            "Fixed resistance and variable resistance respectively"
        ],
        answer: 1
    },

    {
        question: "The filament of an incandescent electric bulb is made of tungsten primarily because tungsten has:",
        options: [
            "A very low melting point and low electrical resistance",
            "An exceptionally high melting point, allowing it to glow white-hot without melting",
            "Highly malleable non-metallic nature",
            "High magnetic permeability"
        ],
        answer: 1
    },

    {
        question: "The property by which metals can be hammered or beaten into thin sheets without shattering (such as making aluminium foil) is known as:",
        options: [
            "Ductility",
            "Malleability",
            "Sonorousness",
            "Lustre"
        ],
        answer: 1
    },

    {
        question: "Which metal exists as a liquid at room temperature (around 25°C)?",
        options: [
            "Gallium (above 30°C)",
            "Mercury",
            "Bromine",
            "Sodium"
        ],
        answer: 1
    },

    {
        question: "When magnesium ribbon is burned in air, it produces a dazzling white flame and leaves behind a white ash (magnesium oxide). When this ash is dissolved in water, the resulting solution will:",
        options: [
            "Turn blue litmus paper red, proving it is acidic",
            "Turn red litmus paper blue, proving it is basic",
            "Not affect litmus paper at all because it is completely neutral",
            "Turn phenolphthalein indicator completely colourless"
        ],
        answer: 1
    },

    {
        question: "Although non-metals are generally poor conductors of electricity, which allotropic form of carbon is an excellent conductor of electricity?",
        options: [
            "Diamond",
            "Charcoal",
            "Graphite",
            "Coal"
        ],
        answer: 2
    },

    {
        question: "The dramatic physical and physiological changes during puberty in males and females are initiated and regulated by chemical messengers known as:",
        options: [
            "Digestive enzymes",
            "Hormones secreted by endocrine glands directly into the bloodstream",
            "Neurotransmitters flowing inside blood vessels",
            "Antibodies generated by bone marrow"
        ],
        answer: 1
    },

    {
        question: "Which endocrine gland is located at the base of the brain and is called the 'Master Gland' because its secretions stimulate and control other endocrine glands?",
        options: [
            "Thyroid gland",
            "Adrenal gland",
            "Pituitary gland",
            "Pancreas"
        ],
        answer: 2
    },

    {
        question: "Insufficient secretion of thyroxine hormone by the thyroid gland, often caused by a dietary deficiency of iodine, leads to which condition?",
        options: [
            "Diabetes mellitus",
            "Goitre (swelling of the neck)",
            "Scurvy",
            "Rickets"
        ],
        answer: 1
    },

    {
        question: "Which hormone is released by the adrenal glands to prepare the human body to manage extreme emergency situations ('fight or flight' response)?",
        options: [
            "Adrenaline",
            "Insulin",
            "Estrogen",
            "Growth hormone"
        ],
        answer: 0
    }

];