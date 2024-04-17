interface MajorCredits {
    readonly credits: number;
    readonly brand: symbol;
}

interface MinorCredits {
    readonly credits: number;
    readonly brand: symbol;
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: subject1.brand
    };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: subject2.brand
    }
}