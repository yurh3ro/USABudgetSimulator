
60
61
62
63
64
65
66
67
68
69
70
71
72
73
74
75
76
77
78
79
80
81
82
83
84
85
86
87
88
89
90
91
92
93
94
95
96
97
98
99
100
101
102
103
104
105
106
107
108
109
110
111
112
113
114
115
116
117
118
119
120
121
122
123
124
125
126
127
128
129
130
131
132
133
134
135
136
137
138
139
140
141
<!DOCTYPE html>
            let defense = parseInt(document.getElementById("defense").value);
            let healthcare = parseInt(document.getElementById("healthcare").value);
            let education = parseInt(document.getElementById("education").value);
            let infrastructure = parseInt(document.getElementById("infrastructure").value);
            
            document.getElementById("defense-value").innerText = defense;
            document.getElementById("healthcare-value").innerText = healthcare;
            document.getElementById("education-value").innerText = education;
            document.getElementById("infrastructure-value").innerText = infrastructure;
            
            let totalBudget = defense + healthcare + education + infrastructure;
            let deficit = baseDeficit + (totalBudget - 1550);
            document.getElementById("deficit").innerText = "$" + deficit + " Billion";
        }
        
        function applyPolicy() {
            let policy = document.getElementById("policy-selector").value;
            let gdpIncrease = 0;
            
            switch (policy) {
                case "universal_healthcare":
                    gdpIncrease = 0.5;
                    baseDeficit += 200;
                    break;
                case "blockchain_voting":
                    gdpIncrease = 0.2;
                    break;
                case "carbon_tax":
                    gdpIncrease = 0.3;
                    baseDeficit -= 100;
                    break;
                case "corporate_tax_cut":
                    gdpIncrease = 0.4;
                    baseDeficit += 150;
                    break;
                case "increase_min_wage":
                    gdpIncrease = 0.6;
                    break;
            }
            
            baseGDP += gdpIncrease;
            document.getElementById("gdp").innerText = "$" + baseGDP.toFixed(1) + "T";
            document.getElementById("deficit").innerText = "$" + baseDeficit + " Billion";
        }
    </script>
    
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 0;
            padding: 20px;
            background-color: #f4f4f4;
        }
        header {
            background-color: #333;
            color: white;
            padding: 20px;
        }
        main {
            margin: 20px auto;
            width: 80%;
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        h2 {
            color: #333;
        }
        select, button, input[type=range] {
            margin: 10px;
        }
        footer {
            margin-top: 20px;
            padding: 10px;
            background-color: #333;
            color: white;
        }
    </style>
</body>
</html>
