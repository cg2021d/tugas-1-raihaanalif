function main(){
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    const titik = {
        color: [255, 165, 0.0],
        color2: [255, 215, 0.0],
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
        ...titik.C, ...titik.color,

        //Segtiga 3
        ...titik.K3, ...titik.color,
        ...titik.E, ...titik.color,
        ...titik.F, ...titik.color,

        //Segitiga 4
        ...titik.K3, ...titik.color,
        ...titik.F, ...titik.color,
        ...titik.L3, ...titik.color,

        //Segitiga 5
        ...titik.F, ...titik.color,
        ...titik.L3, ...titik.color,
        ...titik.G, ...titik.color,

        //Segitiga 6
        ...titik.G, ...titik.color,
        ...titik.L3, ...titik.color,
        ...titik.J3, ...titik.color,

        //Segitiga 7
        ...titik.G, ...titik.color,
        ...titik.H, ...titik.color,
        ...titik.J3, ...titik.color,

        //Segitiga 8
        ...titik.I3, ...titik.color,
        ...titik.H, ...titik.color,
        ...titik.J3, ...titik.color,

        //Segitiga 9
        ...titik.H, ...titik.color,
        ...titik.I, ...titik.color,
        ...titik.I3, ...titik.color,

        //Segitiga 10
        ...titik.I, ...titik.color,
        ...titik.I3, ...titik.color,
        ...titik.J, ...titik.color,

        //segitiga 11
        ...titik.I3, ...titik.color,
        ...titik.H3, ...titik.color,
        ...titik.J, ...titik.color,

        //segitiga 12
        ...titik.K, ...titik.color,
        ...titik.J, ...titik.color,
        ...titik.H3, ...titik.color,

        //segitiga 13
        ...titik.K, ...titik.color,
        ...titik.H3, ...titik.color,
        ...titik.G3, ...titik.color,

        //Segitiga 14
        ...titik.K, ...titik.color,
        ...titik.L, ...titik.color,
        ...titik.G3, ...titik.color,

        //Segitiga 15
        ...titik.G3, ...titik.color,
        ...titik.L, ...titik.color,
        ...titik.M, ...titik.color,

        //Segitiga 16
        ...titik.M, ...titik.color,
        ...titik.N, ...titik.color,
        ...titik.G3, ...titik.color,

        //Segitiga 17
        ...titik.N, ...titik.color,
        ...titik.G3, ...titik.color,
        ...titik.F3, ...titik.color,

        //Segitiga 18
        ...titik.N, ...titik.color,
        ...titik.F3, ...titik.color,
        ...titik.O, ...titik.color,

        //Segitiga 19
        ...titik.O, ...titik.color,
        ...titik.F3, ...titik.color,
        ...titik.E3, ...titik.color,

        //Segitiga 20
        ...titik.O, ...titik.color,
        ...titik.E3, ...titik.color,
        ...titik.P, ...titik.color,

        //Segitiga 21
        ...titik.E3, ...titik.color,
        ...titik.C3, ...titik.color,
        ...titik.P, ...titik.color,

        //Segitiga 22
        ...titik.Q, ...titik.color,
        ...titik.C3, ...titik.color,
        ...titik.P, ...titik.color,

        //Segitiga 23
        ...titik.C3, ...titik.color,
        ...titik.D3, ...titik.color,
        ...titik.Q, ...titik.color,
        
        //Segitiga 24
        ...titik.Q, ...titik.color,
        ...titik.D3, ...titik.color,
        ...titik.R, ...titik.color,

        //Segitiga 
        ...titik.B3, ...titik.color,
        ...titik.D3, ...titik.color,
        ...titik.R, ...titik.color,

        //Segitiga 
        ...titik.R, ...titik.color,
        ...titik.D3, ...titik.color,
        ...titik.S, ...titik.color,

        //Segitiga 
        ...titik.S, ...titik.color,
        ...titik.B3, ...titik.color,
        ...titik.D3, ...titik.color,

        //Segitiga 
        ...titik.S, ...titik.color,
        ...titik.B3, ...titik.color,
        ...titik.T, ...titik.color,

        //Segitiga 
        ...titik.A3, ...titik.color,
        ...titik.B3, ...titik.color,
        ...titik.T, ...titik.color,

        //Segitiga 
        ...titik.T, ...titik.color,
        ...titik.A3, ...titik.color,
        ...titik.U, ...titik.color,

        //Segitiga 
        ...titik.A3, ...titik.color,
        ...titik.U, ...titik.color,
        ...titik.V, ...titik.color,

        //Segitiga 
        ...titik.A3, ...titik.color,
        ...titik.Z2, ...titik.color,
        ...titik.V, ...titik.color,

        //Segitiga 
        ...titik.Z2, ...titik.color,
        ...titik.W, ...titik.color,
        ...titik.V, ...titik.color,

        //Segitiga 
        ...titik.W, ...titik.color,
        ...titik.W2, ...titik.color,
        ...titik.Z2, ...titik.color,

        //Segitiga 
        ...titik.W2, ...titik.color,
        ...titik.Z, ...titik.color,
        ...titik.W, ...titik.color,

        //Segitiga 
        ...titik.A1, ...titik.color,
        ...titik.W2, ...titik.color,
        ...titik.Z, ...titik.color,

        //Segitiga 
        ...titik.V2, ...titik.color,
        ...titik.W2, ...titik.color,
        ...titik.A1, ...titik.color,

        //Segitiga 
        ...titik.A1, ...titik.color,
        ...titik.B1, ...titik.color,
        ...titik.V2, ...titik.color,

        //Segitiga 
        ...titik.U2, ...titik.color,
        ...titik.V2, ...titik.color,
        ...titik.B1, ...titik.color,

        //Segitiga 
        ...titik.C1, ...titik.color,
        ...titik.B1, ...titik.color,
        ...titik.U2, ...titik.color,

        //Segitiga 
        ...titik.C1, ...titik.color,
        ...titik.D1, ...titik.color,
        ...titik.U2, ...titik.color,

        //Segitiga 
        ...titik.T2, ...titik.color,
        ...titik.U2, ...titik.color,
        ...titik.D1, ...titik.color,

        //Segitiga 
        ...titik.E1, ...titik.color,
        ...titik.T2, ...titik.color,
        ...titik.D1, ...titik.color,

        //Segitiga 
        ...titik.T2, ...titik.color,
        ...titik.F1, ...titik.color,
        ...titik.E1, ...titik.color,

        //Segitiga 
        ...titik.T2, ...titik.color,
        ...titik.S2, ...titik.color,
        ...titik.F1, ...titik.color,

        //Segitiga 
        ...titik.R2, ...titik.color,
        ...titik.S2, ...titik.color,
        ...titik.G1, ...titik.color,

        //Segitiga 
        ...titik.S2, ...titik.color,
        ...titik.F1, ...titik.color,
        ...titik.G1, ...titik.color,

        //Segitiga 
        ...titik.Q2, ...titik.color,
        ...titik.R2, ...titik.color,
        ...titik.G1, ...titik.color,

        //Segitiga 
        ...titik.G1, ...titik.color,
        ...titik.Q2, ...titik.color,
        ...titik.H1, ...titik.color,

        //Segitiga 
        ...titik.Q2, ...titik.color,
        ...titik.H1, ...titik.color,
        ...titik.P2, ...titik.color,

        //Segitiga 
        ...titik.H1, ...titik.color,
        ...titik.P2, ...titik.color,
        ...titik.I1, ...titik.color,

        //Segitiga 
        ...titik.I1, ...titik.color,
        ...titik.O2, ...titik.color,
        ...titik.J1, ...titik.color,

        //Segitiga 
        ...titik.I1, ...titik.color,
        ...titik.P2, ...titik.color,
        ...titik.O2, ...titik.color,

        //Segitiga 
        ...titik.K1, ...titik.color,
        ...titik.O2, ...titik.color,
        ...titik.J1, ...titik.color,

        //Segitiga 
        ...titik.O2, ...titik.color,
        ...titik.N2, ...titik.color,
        ...titik.K1, ...titik.color,

       //Segitiga 
       ...titik.L1, ...titik.color,
       ...titik.N2, ...titik.color,
       ...titik.K1, ...titik.color,

       //Segitiga 
       ...titik.M2, ...titik.color,
       ...titik.N2, ...titik.color,
       ...titik.L1, ...titik.color,

       //Segitiga 
       ...titik.M2, ...titik.color,
       ...titik.L1, ...titik.color,
       ...titik.M1, ...titik.color,

       //Segitiga 
       ...titik.M2, ...titik.color,
       ...titik.N1, ...titik.color,
       ...titik.M1, ...titik.color,

       //Segitiga 
       ...titik.M2, ...titik.color,
       ...titik.N1, ...titik.color,
       ...titik.K2, ...titik.color,

       //Segitiga 
       ...titik.K2, ...titik.color,
       ...titik.O1, ...titik.color,
       ...titik.N1, ...titik.color,

       //Segitiga 
       ...titik.K2, ...titik.color,
       ...titik.J2, ...titik.color,
       ...titik.O1, ...titik.color,

       //Segitiga 
       ...titik.J2, ...titik.color,
       ...titik.P1, ...titik.color,
       ...titik.O1, ...titik.color,

       //Segitiga 
       ...titik.J2, ...titik.color,
       ...titik.P1, ...titik.color,
       ...titik.Q1, ...titik.color,

       //Segitiga 
       ...titik.J2, ...titik.color,
       ...titik.P1, ...titik.color,
       ...titik.I2, ...titik.color,

       //Segitiga 
       ...titik.Q1, ...titik.color,
       ...titik.P1, ...titik.color,
       ...titik.I2, ...titik.color,

       //Segitiga 
       ...titik.I2, ...titik.color,
       ...titik.Q1, ...titik.color,
       ...titik.R1, ...titik.color,

       //Segitiga 
       ...titik.I2, ...titik.color,
       ...titik.R1, ...titik.color,
       ...titik.S1, ...titik.color,

       //Segitiga 
       ...titik.I2, ...titik.color,
       ...titik.S1, ...titik.color,
       ...titik.C, ...titik.color,

       //Segitiga
       ...titik.D, ...titik.color,
       ...titik.S1, ...titik.color,
       ...titik.C, ...titik.color,

       //bagian atas
       //segitiga
       ...titik.D, ...titik.color2,
       ...titik.E, ...titik.color2,
       ...titik.F, ...titik.color2,

       //segitiga
       ...titik.T1, ...titik.color2,
       ...titik.E, ...titik.color2,
       ...titik.F, ...titik.color2,

       //segitiga
       ...titik.T1, ...titik.color2,
       ...titik.U1, ...titik.color2,
       ...titik.F, ...titik.color2,

       //segitiga
       ...titik.F, ...titik.color2,
       ...titik.U1, ...titik.color2,
       ...titik.G, ...titik.color2,

       //segitiga
       ...titik.G, ...titik.color2,
       ...titik.U1, ...titik.color2,
       ...titik.V1, ...titik.color2,

       //segitiga
       ...titik.G, ...titik.color2,
       ...titik.V1, ...titik.color2,
       ...titik.H, ...titik.color2,

       //segitiga
       ...titik.H, ...titik.color2,
       ...titik.V1, ...titik.color2,
       ...titik.W1, ...titik.color2,

       //segitiga
       ...titik.H, ...titik.color2,
       ...titik.W1, ...titik.color2,
       ...titik.I, ...titik.color2,

       //segitiga
       ...titik.I, ...titik.color2,
       ...titik.Z1, ...titik.color2,
       ...titik.W1, ...titik.color2,

       //segitiga
       ...titik.I, ...titik.color2,
       ...titik.Z1, ...titik.color2,
       ...titik.J, ...titik.color2,

       //segitiga
       ...titik.Z1, ...titik.color2,
       ...titik.J, ...titik.color2,
       ...titik.A2, ...titik.color2,

       //segitiga
       ...titik.J, ...titik.color2,
       ...titik.A2, ...titik.color2,
       ...titik.K, ...titik.color2,

       //segitiga
       ...titik.A2, ...titik.color2,
       ...titik.K, ...titik.color2,
       ...titik.B2, ...titik.color2,

       //segitiga
       ...titik.K, ...titik.color2,
       ...titik.B2, ...titik.color2,
       ...titik.L, ...titik.color2,

       //segitiga
       ...titik.B2, ...titik.color2,
       ...titik.L, ...titik.color2,
       ...titik.C2, ...titik.color2,

       //segitiga
       ...titik.L, ...titik.color2,
       ...titik.C2, ...titik.color2,
       ...titik.M, ...titik.color2,

       //segitiga
       ...titik.M, ...titik.color2,
       ...titik.C2, ...titik.color2,
       ...titik.D2, ...titik.color2,

       //segitiga
       ...titik.M, ...titik.color2,
       ...titik.N, ...titik.color2,
       ...titik.D2, ...titik.color2,

       //segitiga
       ...titik.D2, ...titik.color2,
       ...titik.N, ...titik.color2,
       ...titik.E2, ...titik.color2,

       //segitiga
       ...titik.N, ...titik.color2,
       ...titik.E2, ...titik.color2,
       ...titik.O, ...titik.color2,

       //segitiga
       ...titik.E2, ...titik.color2,
       ...titik.O, ...titik.color2,
       ...titik.F2, ...titik.color2,

       //segitiga
       ...titik.O, ...titik.color2,
       ...titik.P, ...titik.color2,
       ...titik.F2, ...titik.color2,

       //segitiga
       ...titik.F2, ...titik.color2,
       ...titik.P, ...titik.color2,
       ...titik.G2, ...titik.color2,

       //segitiga
       ...titik.P, ...titik.color2,
       ...titik.G2, ...titik.color2,
       ...titik.Q, ...titik.color2,

       //segitiga
       ...titik.Q, ...titik.color2,
       ...titik.G2, ...titik.color2,
       ...titik.H2, ...titik.color2,

       //segitiga
       ...titik.Q, ...titik.color2,
       ...titik.H2, ...titik.color2,
       ...titik.R, ...titik.color2,

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
        if (vertices[126] < -1.0 || vertices[701] > 1.0) {
            speed = speed * -1;
        }

        for (let i = 481; i < vertices.length; i += 5) {
            vertices[i] = vertices[i] + speed;
        }
    }

    function render() {
        // moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(0.00120, 0.0300, 0.00504, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 210;
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}
