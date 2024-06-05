import mongoose from "mongoose";

export type IncludeId<T> = T & { id: string; _id: string };
