pub extern fn main() {
    println!("Hello, world!");
}

#[no_mangle]
fn fib(n: u32) -> u32 {
    if n == 0 {
        return 0;
    }
    let mut a = 0;
    let mut b = 1;
    let mut c;
    for _ in 1..n {
        c = a + b;
        a = b;
        b = c;
    }

    return b;
}

#[no_mangle]
fn catalan(n: usize) -> u32{
    if n == 0{
        return 1
    }
    if n == 1{
        return 1
    }
    let mut cat = vec![0; n+1];
    cat[0] = 1;
    cat[1] = 1;
    for i in 2..n+1{
        cat[i] = 0;
        for j in 0..i{
            cat[i] += cat[j] * cat[i-j-1];
        }
    }
    return cat[n]
} 