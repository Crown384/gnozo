// {
//     title: "PHY 101",
//     courseCode: "PHY 101",
//     author: "",
//     ratings: "4.5",
//     downLink: "https://drive.google.com/uc?export=download&id=1Qbr7j2cUDR_03XAthhvTa8F4be1YAgnj",
//     keywords: ['phy','phy101','phy 101', 'physics',],
//     semester: "1st semester",
// },

const engineeringBooks = [
    {
        title: "CHM 101 1st and 2nd order reaction test",
        fileSize: "20.4KB",
        fileType: "pdf",
        keywords: ["chm", "101", "chm101", "chm 101", "1st", "2nd", "order", "reaction","first", "second", "chemical", "kinetics", "rate", "process", "chemistry"],
        courseCode: "CHM 101",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/hckjabom658oa9v3d31z3/CHM-101-1st-and-2nd-order-reaction..pdf?rlkey=ids8l8ao42c6i8ilgqztahygo&st=kzhbmuio&dl=1",
previewLink: "https://www.dropbox.com/scl/fi/hckjabom658oa9v3d31z3/CHM-101-1st-and-2nd-order-reaction..pdf?rlkey=ids8l8ao42c6i8ilgqztahygo&st=kzhbmuio&dl=0"
    },
    {
        title: "CHM 101 Aromatic Nomenclature Practice Problems",
        fileSize: "24.0KB",
        fileType: "docx",
        keywords: [
            "chm", "101", "chm101", "chm 101", "aromatic", "nomenclature",
            "practice", "problems", "organic", "chemistry", "naming", "compounds"
        ],
        courseCode: "CHM 101",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/a7lv0msb6z0opugd7n5ti/CHM-101-Aromatic-Nomenclature-Practice-Problems..doc?rlkey=hjsz1i6azgmzuo1zgmde5ndnq&st=2jj41420&dl=1"
    },
    {
        title: "CHM 101 Chemical Equilibrium",
        fileSize: "385.0KB",
        fileType: "pdf",
        keywords: [
            "chm", "101", "chm101", "chm 101", "chemical", "equilibrium", "reaction",
            "balance", "chemistry", "concentration", "equations", "dynamic"
        ],
        courseCode: "CHM 101",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/6trzemyh1p5lqv6opb8ho/CHM-101-Chemical-Equilibrium..pdf?rlkey=mlrn07m3aaffzeprn81ahyx70&st=cbk035n8&dl=1"
    },
    {
        title: "GST 101 Communication Listening Skills Reading Skills",
        fileSize: ">1MB",
        fileType: "pdf",
        keywords: [
            "gst", "101", "gst101", "gst 101", "communication", "listening",
            "skills", "reading", "understanding", "practice", "comprehension", "study"
        ],
        courseCode: "GST 101",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/jrcxflgzy1pp4wi1wag18/GST-101-Communication-Listening-Skills-Reading-Skills..pdf?rlkey=4hdq2qkv0dqws2rbbljghxelx&st=tbp1cg46&dl=1"
    },
    {
        title: "GST 103 All Together ICT",
        fileSize: ">1MB",
        fileType: "pdf",
        keywords: [
            "gst", "103", "gst103", "gst 103", "all", "together", "ict",
            "information", "communication", "technology", "digital", "learning"
        ],
        courseCode: "GST 103",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/nri87372p53pv2dpcug7k/GST-103-All-Together-ICT..pdf?rlkey=z2zz23973zmyr6lyp3x69gy43&st=p7zjyhrk&dl=1"
    },
    {
        title: "CHM 101 Reaction Order, Rate Constant, and Experimental Determination",
        fileSize: "200.4KB",
        fileType: "pdf",
        keywords: ["chm", "101", "chm101", "chm 101", "reaction", "order", "rate","constant", "experimental", "determination", "chemistry", "kinetics", "measurement"],
        courseCode: "CHM 101",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/n0mwwdku6t0gs85g3dnkx/CHM_101_Reaction_Order-_Rate_Constant-_and_Experimental_Determination.pdf?rlkey=jhv8thon96cyg1gol4upweluz&st=h5zntujv&dl=1"
    },
{
        title: "GST 101 Communication Listening Skills Reading Skills",
        fileSize: "325.3KB",
        fileType: "pdf",
        keywords: ["gst", "101", "gst101", "gst 101", "communication", "listening", "skills", "reading", "understanding", "practice", "study", "comprehension"],
        courseCode: "GST 101",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/jrcxflgzy1pp4wi1wag18/GST-101-Communication-Listening-Skills-Reading-Skills..pdf?rlkey=4hdq2qkv0dqws2rbbljghxelx&st=5f9x0h5h&dl=1"
    },
    {
        title: "GST 101 How to Talk to Anyone, Anytime, Anywhere",
        fileSize: "116.6KB",
        fileType: "pdf",
        keywords: [
            "gst", "101", "gst101", "gst 101", "talKB", "communication",
            "anyone", "anytime", "anywhere", "social", "interaction", "skills"
        ],
        courseCode: "GST 101",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/dxok78kw69pf57ycl85r4/GST-101-How-to-Talk-to-Anyone-Anytime-Anywhere..pptx?rlkey=sseq9352d2fdixirxj9yiq117&st=k0mtoju4&dl=1"
    },
    {
        title: "GST 101 Listening and Understanding Broken Discourse",
        fileSize: "88.2KB",
        fileType: "pdf",
        keywords: [
            "gst", "101", "gst101", "gst 101", "listening", "understanding",
            "broken", "discourse", "communication", "skills", "language", "practice"
        ],
        courseCode: "GST 101",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/5pgjipzmu030rpjaf6cfe/GST-101-Listening-and-Understanding-Broken-Discourse..pptx?rlkey=g565nv0zjydzs9dmaqs1re0h0&st=gvfsrej9&dl=1"
    },
    {
        title: "GST 101 Reading 2",
        fileSize: "86.7KB",
        fileType: "pdf",
        keywords: [
            "gst", "101", "gst101", "gst 101", "reading", "2", "read",
            "skills", "practice", "study", "learning"
        ],
        courseCode: "GST 101",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/i68qcjjlmw0xu3ne8qew9/GST-101-Reading-2..docx?rlkey=8sa3qo2q364qg5kdsdy5v2l21&st=weuwljde&dl=1"
    },
    {
        title: "GST 101 Reading Skill",
        fileSize: "522.5KB",
        fileType: "pdf",
        keywords: [
            "gst", "101", "gst101", "gst 101", "reading", "skill",
            "read", "practice", "comprehension", "learning"
        ],
        courseCode: "GST 101",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/nhb0xvpp43y6y5dz5uw45/GST-101-Reading-Skill..pdf?rlkey=9r5uzr8dut6c91opge9t64euk&st=glu6vc71&dl=1"
    },
    {
        title: "GST 101 Reading",
        fileSize: "72.5KB",
        fileType: "pdf",
        keywords: [
            "gst", "101", "gst101", "gst 101", "reading", "read",
            "skills", "practice", "study", "learning"
        ],
        courseCode: "GST 101",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/f4olhnasrh5sz7yv0ddux/GST-101-Reading..docx?rlkey=zscb7pxx2jlurm2n166ctxttp&st=fupa3845&dl=1"
    },
    {
        title: "GST 103 All Together ICT",
        fileSize: "371.3KB",
        fileType: "pdf",
        keywords: [
            "gst", "103", "gst103", "gst 103", "ict", "all", "together",
            "information", "communication", "technology"
        ],
        courseCode: "GST 103",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/nri87372p53pv2dpcug7k/GST-103-All-Together-ICT..pdf?rlkey=z2zz23973zmyr6lyp3x69gy43&st=2ov3fq7m&dl=1"
    },
    {
        title: "GST 103 Introduction to ICT",
        fileSize: "865.5KB",
        fileType: "pdf",
        keywords: [
            "gst", "103", "gst103", "gst 103", "introduction", "ict",
            "information", "communication", "technology", "basics"
        ],
        courseCode: "GST 103",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/9xubuch9cg7qc57u2ledl/GST-103-Introduction-to-ICT..pdf?rlkey=04tntolsuvaerw8px0j7gka7e&st=cxixxbuv&dl=1"
    },
    {
        title: "GST 103 Serials",
        fileSize: "63.0KB",
        fileType: "pdf",
        keywords: [
            "gst", "103", "gst103", "gst 103", "serials", "sequence",
            "order", "study", "ict", "topics"
        ],
        courseCode: "GST 103",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/a4kcjrepg5han9lzfw6mb/GST-103-Serials..docx?rlkey=jt7bpd2bxsdogoff8aqy5iqjx&st=mljfhxwc&dl=1"
    },
    {
        title: "GST 105 Intro to Entrepreneurial Skills",
        fileSize: "23.3KB",
        fileType: "pdf",
        keywords: [
            "gst", "105", "gst105", "gst 105", "intro", "introduction",
            "entrepreneurial", "skills", "business", "startup", "entrepreneurship"
        ],
        courseCode: "GST 105",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/aozz4bujfz4fxkfrrjr25/GST-105-Intro-to-Entrepreneurial-Skills..pdf?rlkey=m59texfgblnrsh65kfxq35gpd&st=mz05o0do&dl=1"
    },
    {
        title: "GST 105 Theory Study Ques",
        fileSize: "324.8KB",
        fileType: "pdf",
        keywords: [
            "gst", "105", "gst105", "gst 105", "theory", "study",
            "questions", "practice", "exam", "learning", "review"
        ],
        courseCode: "GST 105",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/6k7vu8obuee2lbikfi133/GST-105-Theory-Study-Ques..pdf?rlkey=5pmhbxe520prt0uykf8yu1kra&st=dptn2f9j&dl=1"
    },
    {
        title: "GST101~3",
        fileSize: "631.3KB",
        fileType: "pdf",
        keywords: [
            "gst", "101", "gst101", "gst 101", "docxument", "study",
            "skills", "communication", "reading", "learning"
        ],
        courseCode: "GST 101",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/6k7vu8obuee2lbikfi133/GST-105-Theory-Study-Ques..pdf?rlkey=5pmhbxe520prt0uykf8yu1kra&st=dptn2f9j&dl=1"
    },
    {
        title: "MTH 101 Laws of the Algebra of Sets (1)",
        fileSize: "120.7KB",
        fileType: "pdf",
        keywords: ['mth', '101', 'mth101', 'mth 101', 'laws', 'algebra', 'sets', 'mathematics', 'set theory'],
        courseCode: 'MTH 101',
        semester: '1st semester',
        downLink: "https://www.dropbox.com/scl/fi/ftez7jctqlwsxfdl5ewuy/MTH-101-Laws-of-the-Algebra-of-Sets..pdf?rlkey=h8w07bcpkpwwqg7nwczv8kjk6&st=1i3e0h7g&dl=1"
    },
    {
        title: "MTH 101 Mathematical Induction (1)",
        fileSize: "238.8KB",
        fileType: "pdf",
        keywords: ['mth', '101', 'mth101', 'mth 101', 'mathematical', 'induction', 'proof', 'logic', 'mathematics'],
        courseCode: 'MTH 101',
        semester: '1st semester',
        downLink: "https://www.dropbox.com/scl/fi/f3wa8nf451lylk07tlfe3/MTH-101-Mathematical-Induction..pdf?rlkey=9703spkzun1q940q4dr6s0q3o&st=jry9u5zv&dl=1"
    },
    {
        title: "MTH 101 Polynomial Function (1)",
        fileSize: "233.7KB",
        fileType: "pdf",
        keywords: ['mth', '101', 'mth101', 'mth 101', 'polynomial', 'function', 'math', 'equation', 'algebra'],
        courseCode: 'MTH 101',
        semester: '1st semester',
        downLink: "https://www.dropbox.com/scl/fi/sh4u658iget6jmzuoadkd/MTH-101-Polynomial-Function..pdf?rlkey=gtsicugj1shn9mxlr2kenuoun&st=v7gb59sn&dl=1"
    },
    {
        title: "MTH 101 Pascal's Triangle and Binomial Theorem (1)",
        fileSize: "180.9KB",
        fileType: "pdf",
        keywords: ['mth', '101', 'mth101', 'mth 101', 'Pascal', 'triangle', 'binomial', 'theorem', 'algebra'],
        courseCode: 'MTH 101',
        semester: '1st semester',
        downLink: "https://www.dropbox.com/scl/fi/3pmova34k934628211vx2/MTH-101-pascal-Tri-and-Binomial-Theorem..pdf?rlkey=inlp6hqa2mwfql9un06fb0jpx&st=lhvmnyqy&dl=1"
    },
    {
        title: "MTH Supplementary Material (1)",
        fileSize: "374.1KB",
        fileType: "pdf",
        keywords: ['mth', 'supplementary', 'material', 'additional', 'notes', 'math'],
        courseCode: 'MTH 101',
        semester: '1st semester',
        downLink: "1https://www.dropbox.com/scl/fi/vqnkj10gh1i73p3m9w7gu/MTH-Supplementary-Material..pdf?rlkey=hg77r9tg3cmp7zttrhlnmxo6w&st=165a4l45&dl=1"
    },
    {
        title: "PHY 101 Application of Newton's Law (1)",
        fileSize: "425.5KB",
        fileType: "pdf",
        keywords: ['phy', '101', 'phy101', 'phy 101', 'application', 'Newton', 'law', 'physics', 'motion'],
        courseCode: 'PHY 101',
        semester: '1st semester',
        downLink: "https://www.dropbox.com/scl/fi/l41h3adgcbf1xxvyhqlgn/PHY-101-Application-of-Newton-s-Law..pdf?rlkey=s3dz70b0n3imgn8xuw9vgxcm3&st=ssfpuos2&dl=1"
    },
    {
        title: "PHY 101 Conservation Laws (1)",
        fileSize: "283.6KB",
        fileType: "pdf",
        keywords: ['phy', '101', 'phy101', 'phy 101', 'conservation', 'laws', 'energy', 'physics'],
        courseCode: 'PHY 101',
        semester: '1st semester',
        downLink: "https://www.dropbox.com/scl/fi/ve8htb1y09t4z8n8nsja8/PHY-101-Conservation-Laws..pdf?rlkey=ivm7gxx0r1syanokbk5l6zfhl&st=o18wmyln&dl=1"
    },
    {
        title: "PHY 101 Kinematics (1)",
        fileSize: "265.5KB",
        fileType: "pdf",
        keywords: ['phy', '101', 'phy101', 'phy 101', 'kinematics', 'motion', 'physics', 'mechanics'],
        courseCode: 'PHY 101',
        semester: '1st semester',
        downLink: "https://www.dropbox.com/scl/fi/76n09kf85ey19233zufpy/PHY-101-Kinematics..pdf?rlkey=9krziugowkprjvfzzlppnfdqu&st=9fmouq8z&dl=1"
    },
    {
        title: "PHY 101 Mechanics and Properties of Matter-Kinematics",
        fileSize: "1.9MB",
        fileType: "pdf",
        keywords: ['phy', '101', 'phy101', 'phy 101', 'mechanics', 'properties', 'matter', 'kinematics', 'physics'],
        courseCode: 'PHY 101',
        semester: '1st semester',
        downLink: "https://www.dropbox.com/scl/fi/y2ahhn8q8brkrhxkp1p5m/PHY-101-Mechanics-and-Properties-of-Matter-Kinematics..pdf?rlkey=ulmlfmw9oqjppf3ipvdyodpc2&st=bnf7qbs5&dl=1"
    },
    {
        title: "PHY 101 Newton's Laws of Motion",
        fileSize: "120.3KB",
        fileType: "pdf",
        keywords: ["newton", "laws", "motion", "101", "phy", "phy 101"],
        courseCode: "PHY 101",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/9ff41flweqlttpy810ac3/PHY-101-Newton-s-Laws-of-Motion..docx?rlkey=c0woc6e1tcbe471fwnlk2832y&st=1g3zz2fj&dl=1"
    },
    {
        title: "PHY 101 Relativity of Simultaneity",
        fileSize: "169.3KB",
        fileType: "pdf",
        keywords: ["relativity", "simultaneity", "101", "PHY", "PHY 101"],
        courseCode: "PHY 101",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/1ldzf5d932z5ggdhfi5kt/PHY-101-Relativity-of-Simultaneity..pdf?rlkey=040njffp4552blhs7uxxzeve2&st=opokejb7&dl=1"
    },
    {
        title: "PHY 101 Relativity",
        fileSize: "1.1MB",
        fileType: "pdf",
        keywords: ["relativity", "101", "phy", "phy 101"],
        courseCode: "PHY 101",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/tstynkbvn1pz0o9nofkru/PHY-101-Relativity..Pdf?rlkey=hft9x4sc5k7smmud6f34kdeqd&st=ud4h4bi1&dl=1"
    },
    {
        title: "PHY 101 Vector Projectile and Circular Motion",
        fileSize: "84.6KB",
        fileType: "docx",
        keywords: ["vector", "projectile", "circular", "motion", "101", "phy", "phy 101"],
        courseCode: "PHY 101",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/jwgqz6o4wocf2z9yyxsgr/PHY-101-Vector-Projectile-and-Circular-Motion..docx?rlkey=9ghw95quhi2e9z3q1np6vw03c&st=34z1szn6&dl=1"
    },
    {
        title: "PHY 101 Work and Energy",
        fileSize: "353.3KB",
        fileType: "pdf",
        keywords: ["work", "energy", "101", "phy", "phy 101"],
        courseCode: "PHY 101",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/jeoyhv28fyle6n5ruvyo9/PHY-101-Work-and-Enegry..pdf?rlkey=cgf7142ijsogg4uswytm3nnns&st=txzwh79a&dl=1"
    },
    {
        title: "PHY 101 Velocity and Acceleration vectors, Projectile and Circular",
        fileSize: "124.4KB",
        fileType: "pdf",
        keywords: ["velocity", "acceleration", "vectors", "projectile", "circular", "101", "phy", "phy 101"],
        courseCode: "PHY 101",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/tkyek2w14kurpiuu00yqe/PHY_101_Velocity_and_Acceleration_vectors-_Projectile_and_Circular-1.pptx?rlkey=og4p5kzqgq4fa0azzwz64es3r&st=5s52efhi&dl=1"
    },
    {
        title: "Phy 101 Motion in One Dimension",
        fileSize: "657.0KB",
        fileType: "pdf",
        keywords: ["motion", "dimension", "101", "phy", "phy 101"],
        courseCode: "PHY 101",
        semester: "1st semester",
        downLink: "https://www.dropbox.com/scl/fi/h30aaeb47d9n5r0b86m1l/Phy-101-Motion-in-one-dimension..pdf?rlkey=eooe0if5fqbkhnxdhop3dqcv0&st=bti5lidc&dl=1"
    },
    {
        title: "CHM 101 1st and 2nd order reaction",
        fileSize: "20.4KB",
        fileType: "pdf",
        keywords: ['chm', '101', 'chm 101', '1st', '2nd', 'order', 'reaction'],
        courseCode: 'CHM 101',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./CHM%20101%202nd%20and%202nd%20order%20reaction..pdf"
    },
    {
        title: "CHM 101 Aromatic Nomenclature Practice Problems",
        fileSize: "24.0KB",
        fileType: "docx",
        keywords: ['chm', '101', 'chm 101', 'aromatic', 'nomenclature', 'practice', 'problems'],
        courseCode: 'CHM 101',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./CHM%20101%20Aromatic%20Nomenclature%20Practice%20Problems..docx"
    },
    {
        title: "CHM 101 Chemical Equilibrium",
        fileSize: "24.0KB",
        fileType: "pdf",
        keywords: ['chm', '101', 'chm 101', 'chemical', 'equilibrium'],
        courseCode: 'CHM 101',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./CHM%20101%20Chemical%20Equilibrium..pdf"
    },
    {
        title: "GST 101 Communication Listening Skills Reading Skills",
        fileSize: "385.0KB",
        fileType: "pdf",
        keywords: ['gst', '101', 'gst 101', 'communication', 'listening', 'skills', 'reading'],
        courseCode: 'GST 101',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./GST%20101%20Communication%20Listening%20Skills%20Reading%20Skills.%20%281%29.pdf"
    },
    {
        title: "GST 103 All Together ICT",
        fileSize: "24.0KB",
        fileType: "pdf",
        keywords: ['gst', '103', 'gst 103', 'all', 'together', 'ict'],
        courseCode: 'GST 103',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./GST%20103%20All%20Together%20ICT.%20%281%29.pdf"
    },
    {
        title: "GST 102 English",
        fileSize: "16.6MB",
        fileType: "pdf",
        keywords: ['gst', '102', 'gst 102', 'english'],
        courseCode: 'GST 102',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./GST%20102%20English.pdf"
    },
    {
        title: "GST 102 MCQ by B.sc",
        fileSize: "133.6KB",
        fileType: "pdf",
        keywords: ['gst', '102', 'gst 102', 'mcq'],
        courseCode: 'GST 102',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./GST%20102%20MCQ%20by%20B.sc.pdf"
    },
    {
        title: "GST 102 Part Of Speech",
        fileSize: "55.1KB",
        fileType: "pdf",
        keywords: ['gst', '102', 'gst 102', 'part', 'of', 'speech'],
        courseCode: 'GST 102',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./GST%20102%20Part%20Of%20Speech.pdf"
    },
    {
        title: "GST 108 Handout",
        fileSize: "3.7MB",
        fileType: "pdf",
        keywords: ['gst', '108', 'gst 108', 'handout'],
        courseCode: 'GST 108',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./GST%20108%20Handout..pdf"
    },
    {
        title: "GST 110 Week 1",
        fileSize: "254.4KB",
        fileType: "pdf",
        keywords: ['gst', '110', 'gst 110', 'week', '1'],
        courseCode: 'GST 110',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./GST%20110%20Week%201.pdf"
    },
    {
        title: "GST 110 Week 2",
        fileSize: "417.7KB",
        fileType: "pdf",
        keywords: ['gst', '110', 'gst 110', 'week', '2'],
        courseCode: 'GST 110',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./GST%20110%20Week%202.pdf"
    },
    {
        title: "GST 110 Week 3",
        fileSize: "306.1KB",
        fileType: "pdf",
        keywords: ['gst', '110', 'gst 110', 'week', '3'],
        courseCode: 'GST 110',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./GST%20110%20Week%203.pdf"
    },
    {
        title: "GST 110 Week 4",
        fileSize: "206.9KB",
        fileType: "pdf",
        keywords: ['gst', '110', 'gst 110', 'week', '4'],
        courseCode: 'GST 110',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./GST%20110%20Week%204.pdf"
    },
    {
        title: "GST 110 Week 5",
        fileSize: "407.4KB",
        fileType: "pdf",
        keywords: ['gst', '110', 'gst 110', 'week', '5'],
        courseCode: 'GST 110',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./GST%20110%20Week%205.pdf"
    },
    {
        title: "GST 110 Week 6",
        fileSize: "284.4KB",
        fileType: "pdf",
        keywords: ['gst', '110', 'gst 110', 'week', '6'],
        courseCode: 'GST 110',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./GST%20110%20Week%206.pdf"
    },
    {
        title: "GST 110 Week 7",
        fileSize: "231.7KB",
        fileType: "pdf",
        keywords: ['gst', '110', 'gst 110', 'week', '7'],
        courseCode: 'GST 110',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./GST%20110%20Week%207.pdf"
    },
    {
        title: "Mth 102 Ass Solution by B.sc",
        fileSize: "1.6MB",
        fileType: "pdf",
        keywords: ['mth', '102', 'mth 102', 'ass', 'solution'],
        courseCode: 'Mth 102',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./Mth%20102%20Ass%20Solution%20by%20B.sc.pdf"
    },
    {
        title: "PHY Atomic structure",
        fileSize: "1.1MB",
        fileType: "pdf",
        keywords: ['phy', 'atomic', 'structure'],
        courseCode: 'PHY',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./PHY%20Atomic%20structure..pdf"
    },
    {
        title: "PHY Electricity",
        fileSize: "356.0KB",
        fileType: "pdf",
        keywords: ['phy', 'electricity'],
        courseCode: 'PHY',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./PHY%20Electricity..pdf"
    },
    {
        title: "PHY Surface Tension",
        fileSize: "83.7KB",
        fileType: "pdf",
        keywords: ['phy', 'surface', 'tension'],
        courseCode: 'PHY',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./PHY%20Surface%20Tension..pdf"
    },
    {
        title: "PHY 102 Coulomb's Law",
        fileSize: "371.3KB",
        fileType: "pdf",
        keywords: ['phy', '102', 'coulomb', 'law'],
        courseCode: 'PHY 102',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./PHY%20102%20Coulomb's%20Law..pdf"
    },
    {
        title: "PHY 102 Electric Field",
        fileSize: "375.3KB",
        fileType: "pdf",
        keywords: ['phy', '102', 'electric', 'field'],
        courseCode: 'PHY 102',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./PHY%20102%20Electric%20Field..pdf"
    },
    {
        title: "PHY 102 Electromagnetic induction",
        fileSize: "718.4KB",
        fileType: "pdf",
        keywords: ['phy', '102', 'electromagnetic', 'induction'],
        courseCode: 'PHY 102',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./PHY%20102%20Electromagnetic%20induction..pdf"
    },
    {
        title: "PHY 102 Electrostatic Force",
        fileSize: "7.8MB",
        fileType: "pdf",
        keywords: ['phy', '102', 'electrostatic', 'force'],
        courseCode: 'PHY 102',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./PHY%20102%20Electrostatic%20Force..pdf"
    },
    {
        title: "PHY 102 Electrostatics 1",
        fileSize: "1.5MB",
        fileType: "pdf",
        keywords: ['phy', '102', 'electrostatics', '1'],
        courseCode: 'PHY 102',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./PHY%20102%20Electrostatics%201..pdf"
    },
    {
        title: "PHY 102 Electrostatics 2",
        fileSize: "228.6KB",
        fileType: "pdf",
        keywords: ['phy', '102', 'electrostatics', '2'],
        courseCode: 'PHY 102',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./PHY%20102%20Electrostatics%202..pdf"
    },
    {
        title: "PHY 102 Gauss Law, Magnetism Current",
        fileSize: "262.8KB",
        fileType: "pdf",
        keywords: ['phy', '102', 'gauss', 'law', 'magnetism', 'current'],
        courseCode: 'PHY 102',
        semester: '2nd semester',
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./PHY%20102%20Gauss%20Law,%20Magnetism%20Current..pdf"
    },
    {
        title: "PHY 102 Gauss Law, Magnetism Current. (1).pdf",
        fileSize: "262.8KB",
        fileType: "pdf",
        keywords: [
            "phy", "102", "gauss", "law", "magnetism", "current", "physics", "electricity", "magnetism", "gauss", "law", "physics102", "phy102", "phy 102"
        ],
        courseCode: "PHY 102",
        semester: "2nd semester",
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./PHY%20102%20Gauss%20Law,%20Magnetism%20Current.%20%281%29.pdf"
    },
    {
        title: "PHY 102 Gauss Law, Magnetism Current..pdf",
        fileSize: "262.8KB",
        fileType: "pdf",
        keywords: [
            "phy", "102", "gauss", "law", "magnetism", "current", "physics", "electricity", "magnetism", "physics102", "phy102", "phy 102"
        ],
        courseCode: "PHY 102",
        semester: "2nd semester",
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./PHY%20102%20Gauss%20Law,%20Magnetism%20Current..pdf"
    },
    {
        title: "PHY 102 Self inductance, Mutual inductance, Transformers..pdf",
        fileSize: "1.0MB",
        fileType: "pdf",
        keywords: [
            "phy", "102", "self", "inductance", "mutual", "transformers", "physics", "electricity", "inductance", "transformer", "physics102", "phy102", "phy 102"
        ],
        courseCode: "PHY 102",
        semester: "2nd semester",
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./PHY%20102%20Self%20inductance,%20Mutual%20inductance,%20Transformers..pdf"
    },
    {
        title: "PHY 102 Tutorial QUE 2017'18..pdf",
        fileSize: "52.6KB",
        fileType: "pdf",
        keywords: [
            "phy", "102", "tutorial", "que", "2017", "2018", "physics", "questions", "practice", "exam", "physics102", "phy102", "phy 102"
        ],
        courseCode: "PHY 102",
        semester: "2nd semester",
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./PHY%20102%20Tutorial%20QUE%202017'18..pdf"
    },
    {
        title: "PHY_102_Conductors,_Currents,_Resistors,_Resistance_and_power_.pdf",
        fileSize: "358.7KB",
        fileType: "pdf",
        keywords: [
            "phy", "102", "conductors", "currents", "resistors", "resistance", "power", "electricity", "physics", "circuits", "physics102", "phy102", "phy 102"
        ],
        courseCode: "PHY 102",
        semester: "2nd semester",
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./PHY_102_Conductors,_Currents,_Resistors,_Resistance_and_power_.pdf"
    },
    {
        title: "Phrof_Malomo's_Students_Copy_CHM_102_Tutorial_Questions_Populated.pdf",
        fileSize: "318.9KB",
        fileType: "pdf",
        keywords: [
            "phrof",'prof','professor', "malomo", "students", "copy", "chm", "102", "tutorial", "questions", "populated", "chemistry", "101", "chm102", "chm 102"
        ],
        courseCode: "CHM 102",
        semester: "2nd semester",
        downLink: "https://archive.org/download/phy-101-mechanics-and-properties-of-matter-kinematics./Phrof_Malomo's_Students_Copy_CHM_102_Tutorial_Questions_Populated.pdf"
    },
];
