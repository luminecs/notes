/**
 * The strict flag in the CLI, or "strict": true in a tsconfig.json toggles
 * the type-checking strictness flags all on simultaneously, but we can
 * opt out of them individually. The two biggest ones you should know
 * about are noImplicitAny and strictNullChecks.
 *
 * Turning on the noImplicitAny flag will issue an error on any variables
 * whose type is implicitly inferred as any.
 *
 * By default, values like null and undefined are assignable to any other
 * type. The strictNullChecks flag makes handling null and undefined more
 * explicit, and spares us from worrying about whether we forgot to handle
 * null and undefined.
 */
