function main(){
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    const titik = {
        color: [252, 99, 0.0],
        color2: [255, 215, 1.0],
        C: [-0.5808278304874, 0.5475269224199],
        D: [-0.5808278304874, 0.5804124357151],
        E: [-0.5572360492104, 0.581842240641],
        F: [-0.5314995605446, 0.5711187036969],
        G: [-0.5093375841935, 0.5632547766046],
        H: [-0.4871756078424, 0.5518163371975],
        I: [-0.467873241343, 0.5368033854758],
        J: [-0.4507155822325, 0.5203606288282],
        K: [-0.433557923122, 0.500343359866],
        L: [-0.4199747763261, 0.4781813835149],
        M: [-0.4078214344562, 0.4574492120896],
        N: [-0.3970978975121, 0.4345723332756],
        O: [-0.3906637753456, 0.4116954544615],
        P: [-0.3899488728827, 0.3859589657958],
        Q: [-0.3920935802715, 0.36022247713],
        R: [-0.398527702438, 0.3273369638348],
        S: [-0.4104413614715, 0.3006210553531],
        T: [-0.4256939960296, 0.2794384988179],
        U: [-0.4442814600661, 0.2629957421703],
        V: [-0.4671583388801, 0.2486976929115],
        W: [-0.4907501201571, 0.2401188633562],
        Z: [-0.5172015112858, 0.2358294485786],

        A1: [-0.5415081950257, 0.2343996436527],
        B1: [-0.5629552689139, 0.2394039608933],
        C1: [-0.5865470501909, 0.2465529855227],
        D1: [-0.6094239290049, 0.2579914249297],
        E1: [-0.6323008078189, 0.2730043766514],
        F1: [-0.6530329792442, 0.290162035762],
        G1: [-0.6701906383547, 0.3087494997984],
        H1: [-0.690207907317, 0.3380605007789],
        I1: [-0.6987867368722, 0.3580777697411],
        J1: [-0.7102251762793, 0.3809546485552],
        K1: [-0.713084786131, 0.4124103569245],
        L1: [-0.713084786131, 0.4488703825344],
        M1: [-0.7095102738163, 0.4774664810519],
        N1: [-0.7, 0.5],
        O1: [-0.6887781023911, 0.5210755312912],
        P1: [-0.6701906383547, 0.5432375076423],
        Q1: [-0.6494584669295, 0.558250459364],
        R1: [-0.6251517831896, 0.570403801234],
        S1: [-0.6029898068385, 0.5782677283263],
        T1: [-0.5343591703963, 0.5825571431039],
        U1: [-0.5100524866564, 0.581127338178],
        V1: [-0.4878905103053, 0.5746932160116],
        W1: [-0.4642987290283, 0.5646845815304],
        Z1: [-0.4521453871584, 0.5575355569011],

        A2: [-0.4199747763261, 0.5332288731611],
        B2: [-0.4035320196785, 0.5096370918842],
        C2: [-0.3885190679568, 0.4846155056813],
        D2: [-0.3770806285498, 0.4560194071638],
        E2: [-0.3727912137722, 0.4309978209609],
        F2: [-0.3720763113092, 0.4045464298322],
        G2: [-0.3742210186981, 0.3795248436293],
        H2: [-0.3770806285498, 0.3645118919076],
        I2: [-0.6244368807266, 0.5375182879388],
        J2: [-0.6580372964847, 0.5167861165135],
        K2: [-0.6759098580582, 0.4910496278477],
        M2: [-0.6873482974652, 0.4638833342561],
        N2: [-0.6923526147058, 0.4331425283497],
        O2: [-0.690940549992, 0.3982755601761],
        P2: [-0.6818311854641, 0.3682483956213],
        Q2: [-0.666648911251, 0.3375464633237],
        R2: [-0.6558526273662, 0.322701572982],
        S2: [-0.6394560903808, 0.3050741458884],
        T2: [-0.6165829739049, 0.2857447516835],
        U2: [-0.5829333801757, 0.2681806965812],
        V2: [-0.5582512576414, 0.2629444822193],
        W2: [-0.5299385461084, 0.260545099886],
        Z2: [-0.4915484287755, 0.2699026909859],

        A3: [-0.4562536332133, 0.2934307884878],
        B3: [-0.4392024289328, 0.3143852804952],
        C3: [-0.4234936327903, 0.3575469424141],
        D3: [-0.4302730835167, 0.331912144355],
        E3: [-0.4214859570608, 0.3817445317859],
        F3: [-0.4226969205257, 0.4076937092685],
        G3: [-0.4310085984001, 0.4386940213406],
        H3: [-0.4478431975321, 0.4729450766734],
        I3: [-0.4721563669915, 0.5010788870478],
        J3: [-0.4957748744663, 0.5212240845998],
        K3: [-0.5610731010142, 0.5469265780283],
        L3: [-0.5346759456012, 0.5420639441364],
    }

    const titik2 = {
        color: [252, 99, 0.0],
        color2: [255, 215, 1.0],
        C: [0.0928209691284, 0.3537321219703],
        D: [0.0849765161943, 0.3375529377938],
        E: [0.08, 0.32],
        F: [0.0756612283352, 0.3022528995907],
        G: [0.07419039341, 0.2885251069561], 
        H: [0.0746806717184, 0.2762681492466], 
        I: [0.0746806717184, 0.2600889650702], 
        J: [0.0790931764938, 0.2439097808937], 
        K: [0.0854667945027, 0.2301819882591], 
        L: [0.0933112474368, 0.2184153088581], 
        M: [0.1060584834546, 0.2081194643821], 
        N: [0.12, 0.2], 
        O: [0.1353929723465, 0.1926634820247], 
        P: [0.153134495281, 0.1895779997752], 
        Q: [0.1755042415898, 0.1915064261811], 
        R: [0.2013451554293, 0.1969060201177], 
        S: [0.2252576428628, 0.211947746084], 
        T: [0.2476273891716, 0.2304606395809], 
        U: [0.2634404857002, 0.2505162742026], 
        V: [0.275396729417, 0.2705719088242], 
        W: [0.2865816025714, 0.2971841932261], 
        Z: [0.2904384553833, 0.3222537365032], 

        A1: [0.2904384553833, 0.3457805386555], 
        B1: [0.2873529731338, 0.3623650057465], 
        C1: [0.279829796039, 0.3828610929593], 
        D1: [0.265969424089, 0.4033949773296], 
        E1: [0.2505690108112, 0.4152019608426], 
        F1: [0.2274683908946, 0.4244422088092], 
        H1: [0.1874273163724, 0.4254689030278], 
        I1: [0.1668934320021, 0.4193087377167], 
        J1: [0.1499529773965, 0.412121878187], 
        K1: [0.135065911228, 0.4013415888926], 
        L1: [0.1242856219336, 0.3915879938167], 
        M1: [0.1129919855299, 0.380294357413], 
        N1: [0.1006716549077, 0.3674606796815], 
        O1: [0.0637106630411, 0.2601711338465], 
        P1: [0.05755049773, 0.2776249355613], 
        Q1: [0.0544704150744, 0.2925120017298], 
        R1: [0.0549837621837, 0.3166393158649], 
        S1: [0.0560104564022, 0.3315263820334], 
        T1: [0.0631973159318, 0.3541136548408], 
        U1: [0.0698708283522, 0.3710541094463], 
        V1: [0.0824643693344, 0.3874185265275], 
        W1: [0.0910431610135, 0.3986369464157], 
        Z1: [0.1031414569713, 0.4089754902341], 

        A2: [0.1161196289987, 0.4186541270003], 
        B2: [0.1304176151306, 0.4250332285053], 
        C2: [0.1431758181407, 0.4300925159059], 
        D2: [0.1548341760636, 0.4338319892019], 
        E2: [0.1759512017354, 0.4358117103586], 
        F2: [0.1880494976931, 0.4344918962541], 
        G2: [0.1273380488869, 0.3687211600474], 
        H2: [0.1451555392974, 0.384998867336], 
        I2: [0.1590135873945, 0.3929177519629], 
        J2: [0.18, 0.4], 
        K2: [0.1957484133026, 0.404136171851], 
        L2: [0.2109262755042, 0.404136171851], 
        M2: [0.2272039827928, 0.4017165126595], 
        N2: [0.2490315275846, 0.3894438953328], 
        O2: [0.26, 0.38], 
        P2: [0.2666613166688, 0.3688057293079], 
        Q2: [0.2723659727782, 0.3502655969523], 
        R2: [0.2757887664438, 0.3388562847335], 
        S2: [0.2766444648602, 0.3228832476272], 
        T2: [0.2743626024165, 0.3054840464935], 
        U2: [0.2697988775289, 0.2903667078036], 
        V2: [0.2629532901977, 0.2746789035028], 
        W2: [0.2554818355983, 0.2619775790365], 
        Z2: [0.2468243412012, 0.2501719048585], 

        A3: [0.2380094378149, 0.2408847745052], 
        B3: [0.2315556692643, 0.2342735969655], 
        C3: [0.2072466526315, 0.2181237210179], 
        D3: [0.1754577475949, 0.2087568709704], 
        E3: [0.1922704169502, 0.2122224676917], 
        F3: [0.1362912669427, 0.2135659672919], 
        G3: [0.1488305965444, 0.2088637186913], 
        H3: [0.1083016919389, 0.2350619608948], 
        I3: [0.1188257721403, 0.2231943810932], 
        J3: [0.0976948588198, 0.2490603112973], 
        K3: [0.0935410888596, 0.2678907351166], 
        L3: [0.0932641708623, 0.2568140152229], 
        M3: [0.0927186833726, 0.2877232187488], 
        N3: [0.0969214499671, 0.3097877433697], 
        O3: [0.0944698361203, 0.298230135235], 
        P3: [0.1074283664532, 0.3399075706301], 
        Q3: [0.1011242165615, 0.3258983486485], 
        R3: [0.12, 0.36], 
        S3: [0.1137325163449, 0.3514651787648]
    }

    const vertices = [
        //KIRI
        //Samping
        //Segitiga1
        ...titik.C, ...titik.color,
        ...titik.D, ...titik.color,
        ...titik.E, ...titik.color,

        //Segitiga 2
        ...titik.K3, ...titik.color,
        ...titik.E, ...titik.color,
        ...titik.C, ...titik.color,//30

        //Segtiga 3
        ...titik.K3, ...titik.color,
        ...titik.E, ...titik.color,
        ...titik.F, ...titik.color,

        //Segitiga 4
        ...titik.K3, ...titik.color,
        ...titik.F, ...titik.color,
        ...titik.L3, ...titik.color,//60

        //Segitiga 5
        ...titik.F, ...titik.color,
        ...titik.L3, ...titik.color,
        ...titik.G, ...titik.color,

        //Segitiga 6
        ...titik.G, ...titik.color,
        ...titik.L3, ...titik.color,
        ...titik.J3, ...titik.color,//90

        //Segitiga 7
        ...titik.G, ...titik.color,
        ...titik.H, ...titik.color,
        ...titik.J3, ...titik.color,

        //Segitiga 8
        ...titik.I3, ...titik.color,
        ...titik.H, ...titik.color,
        ...titik.J3, ...titik.color,//120

        //Segitiga 9
        ...titik.H, ...titik.color,
        ...titik.I, ...titik.color,
        ...titik.I3, ...titik.color,

        //Segitiga 10
        ...titik.I, ...titik.color,
        ...titik.I3, ...titik.color,
        ...titik.J, ...titik.color,//150

        //segitiga 11
        ...titik.I3, ...titik.color,
        ...titik.H3, ...titik.color,
        ...titik.J, ...titik.color,

        //segitiga 12
        ...titik.K, ...titik.color,
        ...titik.J, ...titik.color,
        ...titik.H3, ...titik.color,//180

        //segitiga 13
        ...titik.K, ...titik.color,
        ...titik.H3, ...titik.color,
        ...titik.G3, ...titik.color,

        //Segitiga 14
        ...titik.K, ...titik.color,
        ...titik.L, ...titik.color,
        ...titik.G3, ...titik.color,//210

        //Segitiga 15
        ...titik.G3, ...titik.color,
        ...titik.L, ...titik.color,
        ...titik.M, ...titik.color,

        //Segitiga 16
        ...titik.M, ...titik.color,
        ...titik.N, ...titik.color,
        ...titik.G3, ...titik.color,//240

        //Segitiga 17
        ...titik.N, ...titik.color,
        ...titik.G3, ...titik.color,
        ...titik.F3, ...titik.color,

        //Segitiga 18
        ...titik.N, ...titik.color,
        ...titik.F3, ...titik.color,
        ...titik.O, ...titik.color,//270

        //Segitiga 19
        ...titik.O, ...titik.color,
        ...titik.F3, ...titik.color,
        ...titik.E3, ...titik.color,

        //Segitiga 20
        ...titik.O, ...titik.color,
        ...titik.E3, ...titik.color,
        ...titik.P, ...titik.color,//300

        //Segitiga 21
        ...titik.E3, ...titik.color,
        ...titik.C3, ...titik.color,
        ...titik.P, ...titik.color,

        //Segitiga 22
        ...titik.Q, ...titik.color,
        ...titik.C3, ...titik.color,
        ...titik.P, ...titik.color,//330

        //Segitiga 23
        ...titik.C3, ...titik.color,
        ...titik.D3, ...titik.color,
        ...titik.Q, ...titik.color,
        
        //Segitiga 24
        ...titik.Q, ...titik.color,
        ...titik.D3, ...titik.color,
        ...titik.R, ...titik.color,//360

        //Segitiga 
        ...titik.B3, ...titik.color,
        ...titik.D3, ...titik.color,
        ...titik.R, ...titik.color,

        //Segitiga 
        ...titik.R, ...titik.color,
        ...titik.D3, ...titik.color,
        ...titik.S, ...titik.color,//390

        //Segitiga 
        ...titik.S, ...titik.color,
        ...titik.B3, ...titik.color,
        ...titik.D3, ...titik.color,

        //Segitiga 
        ...titik.S, ...titik.color,
        ...titik.B3, ...titik.color,
        ...titik.T, ...titik.color,//420

        //Segitiga 
        ...titik.A3, ...titik.color,
        ...titik.B3, ...titik.color,
        ...titik.T, ...titik.color,

        //Segitiga 
        ...titik.T, ...titik.color,
        ...titik.A3, ...titik.color,
        ...titik.U, ...titik.color,//450

        //Segitiga 
        ...titik.A3, ...titik.color,
        ...titik.U, ...titik.color,
        ...titik.V, ...titik.color,

        //Segitiga 
        ...titik.A3, ...titik.color,
        ...titik.Z2, ...titik.color,
        ...titik.V, ...titik.color,//480

        //Segitiga 
        ...titik.Z2, ...titik.color,
        ...titik.W, ...titik.color,
        ...titik.V, ...titik.color,

        //Segitiga 
        ...titik.W, ...titik.color,
        ...titik.W2, ...titik.color,
        ...titik.Z2, ...titik.color,//510

        //Segitiga 
        ...titik.W2, ...titik.color,
        ...titik.Z, ...titik.color,
        ...titik.W, ...titik.color,

        //Segitiga 
        ...titik.A1, ...titik.color,
        ...titik.W2, ...titik.color,
        ...titik.Z, ...titik.color,//540

        //Segitiga 
        ...titik.V2, ...titik.color,
        ...titik.W2, ...titik.color,
        ...titik.A1, ...titik.color,

        //Segitiga 
        ...titik.A1, ...titik.color,
        ...titik.B1, ...titik.color,
        ...titik.V2, ...titik.color,//570

        //Segitiga 
        ...titik.U2, ...titik.color,
        ...titik.V2, ...titik.color,
        ...titik.B1, ...titik.color,

        //Segitiga 
        ...titik.C1, ...titik.color,
        ...titik.B1, ...titik.color,
        ...titik.U2, ...titik.color,//600

        //Segitiga 
        ...titik.C1, ...titik.color,
        ...titik.D1, ...titik.color,
        ...titik.U2, ...titik.color,

        //Segitiga 
        ...titik.T2, ...titik.color,
        ...titik.U2, ...titik.color,
        ...titik.D1, ...titik.color,//630

        //Segitiga 
        ...titik.E1, ...titik.color,
        ...titik.T2, ...titik.color,
        ...titik.D1, ...titik.color,

        //Segitiga 
        ...titik.T2, ...titik.color,
        ...titik.F1, ...titik.color,
        ...titik.E1, ...titik.color,//660

        //Segitiga 
        ...titik.T2, ...titik.color,
        ...titik.S2, ...titik.color,
        ...titik.F1, ...titik.color,

        //Segitiga 
        ...titik.R2, ...titik.color,
        ...titik.S2, ...titik.color,
        ...titik.G1, ...titik.color,//690

        //Segitiga 
        ...titik.S2, ...titik.color,
        ...titik.F1, ...titik.color,
        ...titik.G1, ...titik.color,

        //Segitiga 
        ...titik.Q2, ...titik.color,
        ...titik.R2, ...titik.color,
        ...titik.G1, ...titik.color,//720

        //Segitiga 
        ...titik.G1, ...titik.color,
        ...titik.Q2, ...titik.color,
        ...titik.H1, ...titik.color,

        //Segitiga 
        ...titik.Q2, ...titik.color,
        ...titik.H1, ...titik.color,
        ...titik.P2, ...titik.color,//750

        //Segitiga 
        ...titik.H1, ...titik.color,
        ...titik.P2, ...titik.color,
        ...titik.I1, ...titik.color,

        //Segitiga 
        ...titik.I1, ...titik.color,
        ...titik.O2, ...titik.color,
        ...titik.J1, ...titik.color,//780

        //Segitiga 
        ...titik.I1, ...titik.color,
        ...titik.P2, ...titik.color,
        ...titik.O2, ...titik.color,

        //Segitiga 
        ...titik.K1, ...titik.color,
        ...titik.O2, ...titik.color,
        ...titik.J1, ...titik.color,//810

        //Segitiga 
        ...titik.O2, ...titik.color,
        ...titik.N2, ...titik.color,
        ...titik.K1, ...titik.color,

       //Segitiga 
       ...titik.L1, ...titik.color,
       ...titik.N2, ...titik.color,
       ...titik.K1, ...titik.color,//840

       //Segitiga 
       ...titik.M2, ...titik.color,
       ...titik.N2, ...titik.color,
       ...titik.L1, ...titik.color,

       //Segitiga 
       ...titik.M2, ...titik.color,
       ...titik.L1, ...titik.color,
       ...titik.M1, ...titik.color,//870

       //Segitiga 
       ...titik.M2, ...titik.color,
       ...titik.N1, ...titik.color,
       ...titik.M1, ...titik.color,

       //Segitiga 
       ...titik.M2, ...titik.color,
       ...titik.N1, ...titik.color,
       ...titik.K2, ...titik.color,//900

       //Segitiga 
       ...titik.K2, ...titik.color,
       ...titik.O1, ...titik.color,
       ...titik.N1, ...titik.color,

       //Segitiga 
       ...titik.K2, ...titik.color,
       ...titik.J2, ...titik.color,
       ...titik.O1, ...titik.color,//930

       //Segitiga 
       ...titik.J2, ...titik.color,
       ...titik.P1, ...titik.color,
       ...titik.O1, ...titik.color,

       //Segitiga 
       ...titik.J2, ...titik.color,
       ...titik.P1, ...titik.color,
       ...titik.Q1, ...titik.color,//960

       //Segitiga 
       ...titik.J2, ...titik.color,
       ...titik.P1, ...titik.color,
       ...titik.I2, ...titik.color,

       //Segitiga 
       ...titik.Q1, ...titik.color,
       ...titik.P1, ...titik.color,
       ...titik.I2, ...titik.color,//1020

       //Segitiga 
       ...titik.I2, ...titik.color,
       ...titik.Q1, ...titik.color,
       ...titik.R1, ...titik.color,

       //Segitiga 
       ...titik.I2, ...titik.color,
       ...titik.R1, ...titik.color,
       ...titik.S1, ...titik.color,//1050

       //Segitiga 
       ...titik.I2, ...titik.color,
       ...titik.S1, ...titik.color,
       ...titik.C, ...titik.color,

       //Segitiga
       ...titik.D, ...titik.color,
       ...titik.S1, ...titik.color,
       ...titik.C, ...titik.color,//1080

       //bagian atas
       //segitiga
       ...titik.D, ...titik.color2,
       ...titik.E, ...titik.color2,
       ...titik.F, ...titik.color2,

       //segitiga
       ...titik.T1, ...titik.color2,
       ...titik.E, ...titik.color2,
       ...titik.F, ...titik.color2,//1120

       //segitiga
       ...titik.T1, ...titik.color2,
       ...titik.U1, ...titik.color2,
       ...titik.F, ...titik.color2,

       //segitiga
       ...titik.F, ...titik.color2,
       ...titik.U1, ...titik.color2,
       ...titik.G, ...titik.color2,//1140

       //segitiga
       ...titik.G, ...titik.color2,
       ...titik.U1, ...titik.color2,
       ...titik.V1, ...titik.color2,

       //segitiga
       ...titik.G, ...titik.color2,
       ...titik.V1, ...titik.color2,
       ...titik.H, ...titik.color2,//1170

       //segitiga
       ...titik.H, ...titik.color2,
       ...titik.V1, ...titik.color2,
       ...titik.W1, ...titik.color2,

       //segitiga
       ...titik.H, ...titik.color2,
       ...titik.W1, ...titik.color2,
       ...titik.I, ...titik.color2,//1200

       //segitiga
       ...titik.I, ...titik.color2,
       ...titik.Z1, ...titik.color2,
       ...titik.W1, ...titik.color2,

       //segitiga
       ...titik.I, ...titik.color2,
       ...titik.Z1, ...titik.color2,
       ...titik.J, ...titik.color2,//1230

       //segitiga
       ...titik.Z1, ...titik.color2,
       ...titik.J, ...titik.color2,
       ...titik.A2, ...titik.color2,

       //segitiga
       ...titik.J, ...titik.color2,
       ...titik.A2, ...titik.color2,
       ...titik.K, ...titik.color2,//1260

       //segitiga
       ...titik.A2, ...titik.color2,
       ...titik.K, ...titik.color2,
       ...titik.B2, ...titik.color2,

       //segitiga
       ...titik.K, ...titik.color2,
       ...titik.B2, ...titik.color2,
       ...titik.L, ...titik.color2,//1290

       //segitiga
       ...titik.B2, ...titik.color2,
       ...titik.L, ...titik.color2,
       ...titik.C2, ...titik.color2,

       //segitiga
       ...titik.L, ...titik.color2,
       ...titik.C2, ...titik.color2,
       ...titik.M, ...titik.color2,//1320

       //segitiga
       ...titik.M, ...titik.color2,
       ...titik.C2, ...titik.color2,
       ...titik.D2, ...titik.color2,

       //segitiga
       ...titik.M, ...titik.color2,
       ...titik.N, ...titik.color2,
       ...titik.D2, ...titik.color2,//1350

       //segitiga
       ...titik.D2, ...titik.color2,
       ...titik.N, ...titik.color2,
       ...titik.E2, ...titik.color2,

       //segitiga
       ...titik.N, ...titik.color2,
       ...titik.E2, ...titik.color2,
       ...titik.O, ...titik.color2,//1380

       //segitiga
       ...titik.E2, ...titik.color2,
       ...titik.O, ...titik.color2,
       ...titik.F2, ...titik.color2,

       //segitiga
       ...titik.O, ...titik.color2,
       ...titik.P, ...titik.color2,
       ...titik.F2, ...titik.color2,//1410

       //segitiga
       ...titik.F2, ...titik.color2,
       ...titik.P, ...titik.color2,
       ...titik.G2, ...titik.color2,

       //segitiga
       ...titik.P, ...titik.color2,
       ...titik.G2, ...titik.color2,
       ...titik.Q, ...titik.color2,//1440

       //segitiga
       ...titik.Q, ...titik.color2,
       ...titik.G2, ...titik.color2,
       ...titik.H2, ...titik.color2,

       //segitiga
       ...titik.Q, ...titik.color2,
       ...titik.H2, ...titik.color2,
       ...titik.R, ...titik.color2,//1440
        
       //Segitiga Kanan
       //Semangat
       //Lingkaran Samping

       //Segitiga
       ...titik2.K1, ...titik2.color,
       ...titik2.J1, ...titik2.color,
       ...titik2.I2, ...titik2.color,
       
       //Segitiga
       ...titik2.I1, ...titik2.color,
       ...titik2.J1, ...titik2.color,
       ...titik2.I2, ...titik2.color,//30

       //Segitiga
       ...titik2.I1, ...titik2.color,
       ...titik2.J2, ...titik2.color,
       ...titik2.I2, ...titik2.color,

       //Segitiga
       ...titik2.H1, ...titik2.color,
       ...titik2.J2, ...titik2.color,
       ...titik2.K2, ...titik2.color,//60

       //Segitiga
       ...titik2.H1, ...titik2.color,
       ...titik2.L2, ...titik2.color,
       ...titik2.K2, ...titik2.color,

       //Segitiga
       ...titik2.H1, ...titik2.color,
       ...titik2.F1, ...titik2.color,
       ...titik2.L2, ...titik2.color,//90

       //Segitiga
       ...titik2.F1, ...titik2.color,
       ...titik2.L2, ...titik2.color,
       ...titik2.M2, ...titik2.color,

       //Segitiga
       ...titik2.F1, ...titik2.color,
       ...titik2.E1, ...titik2.color,
       ...titik2.M2, ...titik2.color,//120

       //Segitiga
       ...titik2.E1, ...titik2.color,
       ...titik2.N2, ...titik2.color,
       ...titik2.M2, ...titik2.color,

       //Segitiga
       ...titik2.E1, ...titik2.color,
       ...titik2.D1, ...titik2.color,
       ...titik2.N2, ...titik2.color,//150

       //Segitiga
       ...titik2.D1, ...titik2.color,
       ...titik2.N2, ...titik2.color,
       ...titik2.O2, ...titik2.color,

       //Segitiga
       ...titik2.D1, ...titik2.color,
       ...titik2.O2, ...titik2.color,
       ...titik2.C1, ...titik2.color,//180

       //Segitiga
       ...titik2.C1, ...titik2.color,
       ...titik2.P2, ...titik2.color,
       ...titik2.O2, ...titik2.color,

       //Segitiga
       ...titik2.C1, ...titik2.color,
       ...titik2.P2, ...titik2.color,
       ...titik2.Q2, ...titik2.color,//210

       //Segitiga
       ...titik2.Q2, ...titik2.color,
       ...titik2.C1, ...titik2.color,
       ...titik2.B1, ...titik2.color,

       //Segitiga
       ...titik2.R2, ...titik2.color,
       ...titik2.B1, ...titik2.color,
       ...titik2.Q2, ...titik2.color,//240

       //Segitiga
       ...titik2.B1, ...titik2.color,
       ...titik2.A1, ...titik2.color,
       ...titik2.R2, ...titik2.color,

       //Segitiga
       ...titik2.S2, ...titik2.color,
       ...titik2.A1, ...titik2.color,
       ...titik2.R2, ...titik2.color,//270

       //Segitiga
       ...titik2.A1, ...titik2.color,
       ...titik2.Z, ...titik2.color,
       ...titik2.S2, ...titik2.color,

       //Segitiga
       ...titik2.S2, ...titik2.color,
       ...titik2.Z, ...titik2.color,
       ...titik2.T2, ...titik2.color,//300

       //Segitiga
       ...titik2.W, ...titik2.color,
       ...titik2.Z, ...titik2.color,
       ...titik2.T2, ...titik2.color,

       //Segitiga
       ...titik2.W, ...titik2.color,
       ...titik2.T2, ...titik2.color,
       ...titik2.U2, ...titik2.color,//330

       //Segitiga
       ...titik2.W, ...titik2.color,
       ...titik2.V, ...titik2.color,
       ...titik2.U2, ...titik2.color,

       //Segitiga
       ...titik2.V, ...titik2.color,
       ...titik2.V2, ...titik2.color,
       ...titik2.U2, ...titik2.color,//360

       //Segitiga
       ...titik2.W2, ...titik2.color,
       ...titik2.V, ...titik2.color,
       ...titik2.V2, ...titik2.color,

       //Segitiga
       ...titik2.W2, ...titik2.color,
       ...titik2.U, ...titik2.color,
       ...titik2.V, ...titik2.color,//390

       //Segitiga
       ...titik2.W2, ...titik2.color,
       ...titik2.U, ...titik2.color,
       ...titik2.Z2, ...titik2.color,

       //Segitiga
       ...titik2.Z2, ...titik2.color,
       ...titik2.T, ...titik2.color,
       ...titik2.U, ...titik2.color,//420

       //Segitiga
       ...titik2.T, ...titik2.color,
       ...titik2.A3, ...titik2.color,
       ...titik2.Z2, ...titik2.color,

       //Segitiga
       ...titik2.T, ...titik2.color,
       ...titik2.A3, ...titik2.color,
       ...titik2.B3, ...titik2.color,//450

       //Segitiga
       ...titik2.B3, ...titik2.color,
       ...titik2.S, ...titik2.color,
       ...titik2.T, ...titik2.color,

       //Segitiga
       ...titik2.B3, ...titik2.color,
       ...titik2.C3, ...titik2.color,
       ...titik2.S, ...titik2.color,//480

       //Segitiga
       ...titik2.C3, ...titik2.color,
       ...titik2.R, ...titik2.color,
       ...titik2.S, ...titik2.color,

       //Segitiga
       ...titik2.E3, ...titik2.color,
       ...titik2.R, ...titik2.color,
       ...titik2.C3, ...titik2.color,//510

        //Segitiga
        ...titik2.D3, ...titik2.color,
        ...titik2.R, ...titik2.color,
        ...titik2.C3, ...titik2.color,

         //Segitiga
       ...titik2.E3, ...titik2.color,
       ...titik2.R, ...titik2.color,
       ...titik2.D3, ...titik2.color,//540

        //Segitiga
        ...titik2.Q, ...titik2.color,
        ...titik2.R, ...titik2.color,
        ...titik2.D3, ...titik2.color,

         //Segitiga
       ...titik2.D3, ...titik2.color,
       ...titik2.P, ...titik2.color,//TITIK TERENDAH
       ...titik2.Q, ...titik2.color,//570

        //Segitiga
        ...titik2.G3, ...titik2.color,
        ...titik2.P, ...titik2.color,
        ...titik2.D3, ...titik2.color,

        //Segitiga
       ...titik2.G3, ...titik2.color,
       ...titik2.O, ...titik2.color,
       ...titik2.P, ...titik2.color,//600

        //Segitiga
        ...titik2.E3, ...titik2.color,
        ...titik2.R, ...titik2.color,
        ...titik2.C3, ...titik2.color,

        //Segitiga
       ...titik2.O, ...titik2.color,
       ...titik2.G3, ...titik2.color,
       ...titik2.F3, ...titik2.color,//630

        //Segitiga
        ...titik2.F3, ...titik2.color,
        ...titik2.N, ...titik2.color,
        ...titik2.O, ...titik2.color,

         //Segitiga
       ...titik2.E3, ...titik2.color,
       ...titik2.R, ...titik2.color,
       ...titik2.C3, ...titik2.color,//660

        //Segitiga
        ...titik2.F3, ...titik2.color,
        ...titik2.N, ...titik2.color,
        ...titik2.I3, ...titik2.color,

         //Segitiga
       ...titik2.I3, ...titik2.color,
       ...titik2.M, ...titik2.color,
       ...titik2.N, ...titik2.color,//690

        //Segitiga
        ...titik2.E3, ...titik2.color,
        ...titik2.R, ...titik2.color,
        ...titik2.C3, ...titik2.color,

         //Segitiga
       ...titik2.I3, ...titik2.color,
       ...titik2.L, ...titik2.color,
       ...titik2.M, ...titik2.color,//720

        //Segitiga
        ...titik2.I3, ...titik2.color,
        ...titik2.L, ...titik2.color,
        ...titik2.H3, ...titik2.color,

         //Segitiga
       ...titik2.H3, ...titik2.color,
       ...titik2.K, ...titik2.color,
       ...titik2.L, ...titik2.color,//750

        //Segitiga
        ...titik2.H3, ...titik2.color,
        ...titik2.K, ...titik2.color,
        ...titik2.J3, ...titik2.color,

         //Segitiga
       ...titik2.J3, ...titik2.color,
       ...titik2.J, ...titik2.color,
       ...titik2.K, ...titik2.color,//780

        //Segitiga
        ...titik2.J3, ...titik2.color,
        ...titik2.J, ...titik2.color,
        ...titik2.L3, ...titik2.color,

         //Segitiga
       ...titik2.E3, ...titik2.color,
       ...titik2.R, ...titik2.color,
       ...titik2.C3, ...titik2.color,//810

        //Segitiga
        ...titik2.L3, ...titik2.color,
        ...titik2.J, ...titik2.color,
        ...titik2.I, ...titik2.color,

         //Segitiga
       ...titik2.K3, ...titik2.color,
       ...titik2.I, ...titik2.color,
       ...titik2.L3, ...titik2.color,//840

        //Segitiga
        ...titik2.H, ...titik2.color,
        ...titik2.I, ...titik2.color,
        ...titik2.K3, ...titik2.color,

         //Segitiga
       ...titik2.K3, ...titik2.color,
       ...titik2.H, ...titik2.color,
       ...titik2.M3, ...titik2.color,//870

        //Segitiga
        ...titik2.M3, ...titik2.color,
        ...titik2.G, ...titik2.color,
        ...titik2.H, ...titik2.color,

         //Segitiga
       ...titik2.M3, ...titik2.color,
       ...titik2.G, ...titik2.color,
       ...titik2.F, ...titik2.color,//900

        //Segitiga
        ...titik2.O3, ...titik2.color,
        ...titik2.F, ...titik2.color,
        ...titik2.M3, ...titik2.color,

         //Segitiga
       ...titik2.F, ...titik2.color,
       ...titik2.O3, ...titik2.color,
       ...titik2.N3, ...titik2.color,//930

        //Segitiga
        ...titik2.E, ...titik2.color,
        ...titik2.F, ...titik2.color,
        ...titik2.N3, ...titik2.color,

         //Segitiga
       ...titik2.Q3, ...titik2.color,
       ...titik2.E, ...titik2.color,
       ...titik2.N3, ...titik2.color,//960

        //Segitiga
        ...titik2.D, ...titik2.color,
        ...titik2.E, ...titik2.color,
        ...titik2.Q3, ...titik2.color,

        //Segitiga
        ...titik2.D, ...titik2.color,
        ...titik2.E, ...titik2.color,
        ...titik2.Q3, ...titik2.color,//990

        //Segitiga
        ...titik2.D, ...titik2.color,
        ...titik2.Q3, ...titik2.color,
        ...titik2.P3, ...titik2.color,
        
        //Segitiga
        ...titik2.D, ...titik2.color,
        ...titik2.P3, ...titik2.color,
        ...titik2.C, ...titik2.color,//1020

        //Segitiga
        ...titik2.D, ...titik2.color,
        ...titik2.E, ...titik2.color,
        ...titik2.Q3, ...titik2.color,

        //Segitiga
        ...titik2.C, ...titik2.color,
        ...titik2.P3, ...titik2.color,
        ...titik2.S3, ...titik2.color,//1050

        //Segitiga
        ...titik2.C, ...titik2.color,
        ...titik2.N1, ...titik2.color,
        ...titik2.S3, ...titik2.color,

        //Segitiga
        ...titik2.N1, ...titik2.color,
        ...titik2.S3, ...titik2.color,
        ...titik2.R3, ...titik2.color,//1080

        //Segitiga
        ...titik2.N1, ...titik2.color,
        ...titik2.M1, ...titik2.color,
        ...titik2.R3, ...titik2.color,

        //Segitiga
        ...titik2.M1, ...titik2.color,
        ...titik2.G2, ...titik2.color,
        ...titik2.R3, ...titik2.color,//1110

        //Segitiga
        ...titik2.M1, ...titik2.color,
        ...titik2.L1, ...titik2.color,
        ...titik2.G2, ...titik2.color,

        //Segitiga
        ...titik2.L1, ...titik2.color,
        ...titik2.H2, ...titik2.color,
        ...titik2.G2, ...titik2.color,//1140

        //Segitiga
        ...titik2.L1, ...titik2.color,
        ...titik2.K1, ...titik2.color,
        ...titik2.H2, ...titik2.color,

        //Segitiga
        ...titik2.K1, ...titik2.color,
        ...titik2.H2, ...titik2.color,
        ...titik2.I2, ...titik2.color,//1170

        //Bagian Atas
        //Segitiga
        ...titik2.K, ...titik2.color2,
        ...titik2.I, ...titik2.color2,
        ...titik2.O1, ...titik2.color2,

        //Segitiga
        ...titik2.P1, ...titik2.color2,
        ...titik2.I, ...titik2.color2,
        ...titik2.O1, ...titik2.color2,//1200

        //Segitiga
        ...titik2.P1, ...titik2.color2,
        ...titik2.I, ...titik2.color2,
        ...titik2.H, ...titik2.color2,


        //Segitiga
        ...titik2.P1, ...titik2.color2,
        ...titik2.H, ...titik2.color2,
        ...titik2.Q1, ...titik2.color2,//1230

        //Segitiga
        ...titik2.K, ...titik2.color2,
        ...titik2.I, ...titik2.color2,
        ...titik2.Q1, ...titik2.color2,

        //Segitiga
        ...titik2.H, ...titik2.color2,
        ...titik2.G, ...titik2.color2,
        ...titik2.Q1, ...titik2.color2,//1260

        //Segitiga
        ...titik2.G, ...titik2.color2,
        ...titik2.F, ...titik2.color2,
        ...titik2.Q1, ...titik2.color2,

        //Segitiga
        ...titik2.R1, ...titik2.color2,
        ...titik2.F, ...titik2.color2,
        ...titik2.Q1, ...titik2.color2,//1290

        //Segitiga
        ...titik2.E, ...titik2.color2,
        ...titik2.F, ...titik2.color2,
        ...titik2.R1, ...titik2.color2,

        //Segitiga
        ...titik2.S1, ...titik2.color2,
        ...titik2.E, ...titik2.color2,
        ...titik2.R1, ...titik2.color2,//1320

        //Segitiga
        ...titik2.T1, ...titik2.color2,
        ...titik2.E, ...titik2.color2,
        ...titik2.S1, ...titik2.color2,

        //Segitiga
        ...titik2.E, ...titik2.color2,
        ...titik2.T1, ...titik2.color2,
        ...titik2.D, ...titik2.color2,//1350

        //Segitiga
        ...titik2.D, ...titik2.color2,
        ...titik2.C, ...titik2.color2,
        ...titik2.T1, ...titik2.color2,

        //Segitiga
        ...titik2.C, ...titik2.color2,
        ...titik2.U1, ...titik2.color2,
        ...titik2.T1, ...titik2.color2,//1380

        //Segitiga
        ...titik2.U1, ...titik2.color2,
        ...titik2.V1, ...titik2.color2,
        ...titik2.C, ...titik2.color2,

        //Segitiga
        ...titik2.K, ...titik2.color2,
        ...titik2.I, ...titik2.color2,
        ...titik2.Q1, ...titik2.color2,//1410

        //Segitiga
        ...titik2.V1, ...titik2.color2,
        ...titik2.N1, ...titik2.color2,
        ...titik2.C, ...titik2.color2,

        //Segitiga
        ...titik2.V1, ...titik2.color2,
        ...titik2.W1, ...titik2.color2,
        ...titik2.N1, ...titik2.color2,//1440

        //Segitiga
        ...titik2.W1, ...titik2.color2,
        ...titik2.N1, ...titik2.color2,
        ...titik2.M1, ...titik2.color2,

        //Segitiga
        ...titik2.W1, ...titik2.color2,
        ...titik2.L1, ...titik2.color2,
        ...titik2.M1, ...titik2.color2,//1470

        //Segitiga
        ...titik2.W1, ...titik2.color2,
        ...titik2.L1, ...titik2.color2,
        ...titik2.Z1, ...titik2.color2,

        //Segitiga
        ...titik2.A2, ...titik2.color2,
        ...titik2.L1, ...titik2.color2,
        ...titik2.Z1, ...titik2.color2,//1500

        //Segitiga
        ...titik2.A2, ...titik2.color2,
        ...titik2.L1, ...titik2.color2,
        ...titik2.K1, ...titik2.color2,

        //Segitiga
        ...titik2.A2, ...titik2.color2,
        ...titik2.B2, ...titik2.color2,
        ...titik2.K1, ...titik2.color2,//1530

        //Segitiga
        ...titik2.K1, ...titik2.color2,
        ...titik2.B2, ...titik2.color2,
        ...titik2.J1, ...titik2.color2,

        //Segitiga
        ...titik2.J1, ...titik2.color2,
        ...titik2.C2, ...titik2.color2,
        ...titik2.B2, ...titik2.color2,//1560

        //Segitiga
        ...titik2.J1, ...titik2.color2,
        ...titik2.C2, ...titik2.color2,
        ...titik2.D2, ...titik2.color2,

        //Segitiga
        ...titik2.J1, ...titik2.color2,
        ...titik2.C2, ...titik2.color2,
        ...titik2.B2, ...titik2.color2,//1590

        //Segitiga
        ...titik2.J1, ...titik2.color2,
        ...titik2.I1, ...titik2.color2,
        ...titik2.D2, ...titik2.color2,

        //Segitiga
        ...titik2.I1, ...titik2.color2,
        ...titik2.D2, ...titik2.color2,
        ...titik2.E2, ...titik2.color2,//TITIK TERTINGGI//1620

        //Segitiga
        ...titik2.E2, ...titik2.color2,
        ...titik2.H1, ...titik2.color2,
        ...titik2.I1, ...titik2.color2,

        //Segitiga
        ...titik2.E2, ...titik2.color2,
        ...titik2.F2, ...titik2.color2,
        ...titik2.H1, ...titik2.color2,

        //Segitiga
        ...titik2.F2, ...titik2.color2,
        ...titik2.H1, ...titik2.color2,
        ...titik2.F1, ...titik2.color2,

        //Segitiga
        ...titik2.I1, ...titik2.color,
        ...titik2.J2, ...titik2.color,
        ...titik2.H1, ...titik2.color,
    ]

    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertexShaderCode = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);


    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);


    var shaderProgram = gl.createProgram();


    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);


    gl.linkProgram(shaderProgram);


    gl.useProgram(shaderProgram);


    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var freeze = false;
    
    // Interactive graphics with mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);
    // Interactive graphics with keyboard

    function onKeydown(event) {
        if (event.keyCode == 32) freeze = true;
    }

    function onKeyup(event) {
        if (event.keyCode == 32) freeze = false;
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    // Speed set to my NRP
    var speed = 0.0213;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function moveVertices() {
        if (vertices[2011] < -1.0 || vertices[3061] > 1.0) {
            speed = speed * -1;
        }

        for (let i = 1441; i < vertices.length; i += 5) {
            vertices[i] = vertices[i] + speed;
        }
    }

    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(0.00120, 0.0300, 0.00504, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 650;
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
